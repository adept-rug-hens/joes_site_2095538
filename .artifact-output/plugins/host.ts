import { serve } from "https://deno.land/std@0.125.0/http/server.ts";

let dynamicImports = new Map<string, any>();

async function handler(req: Request): Promise<Response> {
    if (req.body) {
        const body = await req.text();
        let jsonBody = JSON.parse(body)

        if (!jsonBody.feature) {
            return returnResponse(JSON.stringify({error: "Request body is missing: feature"}), 400)
        }
        if (!jsonBody.streamOutput) {
            return returnResponse(JSON.stringify({error: "Request body is missing: streamOutput"}), 400)
        }
        if (!jsonBody.modPath) {
            // the path relative to .artifact-output
            return returnResponse(JSON.stringify({error: "Request body is missing: modPath"}), 400)
        }
        if (!jsonBody.functionName) {
            return returnResponse(JSON.stringify({error: "Request body is missing: functionName"}), 400)
        }

        try {
            if (!dynamicImports.has(jsonBody.modPath)) {
                const mod = await import(jsonBody.modPath)
                dynamicImports.set(String(jsonBody.modPath), mod)
            }
        } catch (err) {
            console.log(err)
            return returnResponse(JSON.stringify({error: `Couldn't import mod.ts file`}), 400)
        }

        const modArgs = {
            feature: jsonBody.feature,
            streamOutput: jsonBody.streamOutput
        }

        const mod = dynamicImports.get(jsonBody.modPath)
        if (mod !== undefined) {
            try {
                let res = await mod[String(jsonBody.functionName)](modArgs)
                return returnResponse(JSON.stringify(res), 200)
            } catch (err) {
                console.log(err)
                return returnResponse(JSON.stringify({error: `Error running plugin`}), 400)
            }
        }
        return returnResponse(JSON.stringify({error: "Unable to import mod.ts file"}), 400)

    }
    return returnResponse(JSON.stringify({status: "Healthy"}), 200)
}

function returnResponse(body: string, status: number): Response {
    return new Response(body, {
        status: status,
        headers: {
            "content-type": "application/json; charset=utf-8",
        },
    });
}

serve(handler, { port: 4243 });