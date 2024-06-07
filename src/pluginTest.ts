import lighthouse from '../lighthouse';
import * as chromeLauncher from '../chrome-launcher';

export async function TestPlugin() {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'seo', 'bestPractices'],
    port: chrome.port
  };
  const runnerResult = await lighthouse('https://yext.com', options);

// `.report` is the HTML report as a string
  const reportHtml = runnerResult.report;

// `.lhr` is the Lighthouse Result as a JS object
  console.log('Report is done for', runnerResult.lhr.finalDisplayedUrl);
  console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

  chrome.kill();

  return reportHtml
}
