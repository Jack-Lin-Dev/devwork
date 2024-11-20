const fs = require("fs/promises");
const { faker } = require("@faker-js/faker");
const pt = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const UserAgent = require("user-agents");
const { randomInt } = require("crypto");
const { WebClient } = require("@slack/web-api");
const readline = require('readline');
require('dotenv').config();
// const chalk = require("chalk");
let chalk;

(async () => {
  chalk = (await import("chalk")).default;
})();

pt.use(StealthPlugin());

// const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");
// pt.use(
//   AdblockerPlugin({
//     interceptResolutionPriority: 0,
//   })
// );

const PASSWORD = "information123";

const SLACK_APP_TOKEN = process.env.SLACK_APP_TOKEN;

const SLACK_CHANNEL_ID = "U08023ZBTBR";

const web = new WebClient(SLACK_APP_TOKEN);
const domainList = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "live.com",
  "aol.com",
  "mail.com",
  "zoho.com",
  "protonmail.com",
  "gmx.com",
  "yandex.com",
  "tutanota.com",
  "shaw.ca",
  "comcast.net",
  "verizon.net",
  "att.net",
  "bellsouth.net",
  "rogers.com",
  "freenet.de",
  "mail.ru",
  "list.ru",
  "rediffmail.com",
  "earthlink.net",
  "wanadoo.fr",
  "orange.fr",
  "hotmail.co.uk",
  "sky.com",
  "ntlworld.com",
  "btinternet.com",
  "libero.it",
  "virgilio.it",
  "fastmail.com",
  "tiscali.it",
  "alice.it",
  "zohomail.com",
  "mailbox.org",
  "inbox.com",
  "hushmail.com",
  "mailinator.com",
  "yopmail.com",
  "temp-mail.org",
  "10minutemail.com",
  "myway.com",
  "juno.com",
  "cnet.com",
  "frontier.com",
  "epost.com",
  "smailpro.com",
  "textbelt.com"
]

/**
 * Function for sending notification to the slack channel
 * @param {string} message
 */



async function sendSlackMessage(message, isGood = true) {
  try {
    // Post a message to the channel
    await web.chat.postMessage({
      channel: SLACK_CHANNEL_ID,
      text: `Index1 ${isGood ? 'TRUE' : 'FALSE'} => ${message}`,
    });
  } catch (error) {
    console.log("send message error!");
  }
}

sendSlackMessage('Hello World');


const nameArray = {
  Poland: [
	{ firstName: 'Adrian', lastName: 'Kowalski' },
    { firstName: 'Adam', lastName: 'Nowak' },
    { firstName: 'Daniel', lastName: 'Wojcik' },
    { firstName: 'Dominik', lastName: 'Kaminski' },
    { firstName: 'Emil', lastName: 'Zielinski' },
    { firstName: 'Filip', lastName: 'Kaczmarek' },
    { firstName: 'Gabriel', lastName: 'Piotrowski' },
    { firstName: 'Igor', lastName: 'Laskowski' },
    { firstName: 'Jakub', lastName: 'Gorski' },
    { firstName: 'Kamil', lastName: 'Wrobel' },
    { firstName: 'Karol', lastName: 'Pawlak' },
    { firstName: 'Krzysztof', lastName: 'Wolski' },
    { firstName: 'Lukasz', lastName: 'Sikora' },
    { firstName: 'Maciej', lastName: 'Baran' },
    { firstName: 'Mateusz', lastName: 'Szewczyk' },
    { firstName: 'Michal', lastName: 'Krawczyk' },
    { firstName: 'Nikodem', lastName: 'Dudek' },
    { firstName: 'Oskar', lastName: 'Zalewski' },
    { firstName: 'Patryk', lastName: 'Nowicki' },
    { firstName: 'Pawel', lastName: 'Czerwinski' },
    { firstName: 'Rafal', lastName: 'Jankowski' },
    { firstName: 'Sebastian', lastName: 'Szymczak' },
    { firstName: 'Szymon', lastName: 'Ostrowski' },
    { firstName: 'Tomasz', lastName: 'Chmielewski' },
    { firstName: 'Wiktor', lastName: 'Urbanski' },
    { firstName: 'Wojciech', lastName: 'Borkowski' },
    { firstName: 'Zbigniew', lastName: 'Sadowski' },
    { firstName: 'Bartosz', lastName: 'Mazurek' },
    { firstName: 'Grzegorz', lastName: 'Kubiak' },
    { firstName: 'Jacek', lastName: 'Brzozowski' }
  ],
  Canada: [
    { firstName: 'Aiden', lastName: 'Smith' },
    { firstName: 'Emma', lastName: 'Johnson' },
    { firstName: 'Liam', lastName: 'Brown' },
    { firstName: 'Sophie', lastName: 'Williams' },
    { firstName: 'Noah', lastName: 'Jones' },
    { firstName: 'Olivia', lastName: 'Miller' },
    { firstName: 'Ethan', lastName: 'Davis' },
    { firstName: 'Isabella', lastName: 'Garcia' },
    { firstName: 'Mason', lastName: 'Rodriguez' },
    { firstName: 'Avery', lastName: 'Martinez' },
    { firstName: 'Lucas', lastName: 'Hernandez' },
    { firstName: 'Mia', lastName: 'Lopez' },
    { firstName: 'Logan', lastName: 'Wilson' },
    { firstName: 'Charlotte', lastName: 'Anderson' },
    { firstName: 'James', lastName: 'Taylor' },
    { firstName: 'Amelia', lastName: 'Thomas' },
    { firstName: 'Jackson', lastName: 'Moore' },
    { firstName: 'Harper', lastName: 'Jackson' },
    { firstName: 'Alexander', lastName: 'Martin' },
    { firstName: 'Ella', lastName: 'Lee' },
    { firstName: 'Benjamin', lastName: 'Perez' },
    { firstName: 'Abigail', lastName: 'Thompson' },
    { firstName: 'Sebastian', lastName: 'White' },
    { firstName: 'Scarlett', lastName: 'Harris' },
    { firstName: 'Oliver', lastName: 'Sanchez' },
    { firstName: 'Chloe', lastName: 'Clark' },
    { firstName: 'William', lastName: 'Ramirez' },
    { firstName: 'Grace', lastName: 'Robinson' },
    { firstName: 'Elijah', lastName: 'Lewis' },
    { firstName: 'Zoe', lastName: 'Walker' },
    { firstName: 'Daniel', lastName: 'Hall' },
    { firstName: 'Lily', lastName: 'Allen' },
    { firstName: 'Matthew', lastName: 'Young' },
    { firstName: 'Luna', lastName: 'King' },
    { firstName: 'Samuel', lastName: 'Scott' },
    { firstName: 'Aria', lastName: 'Green' },
    { firstName: 'David', lastName: 'Adams' },
    { firstName: 'Nora', lastName: 'Baker' },
    { firstName: 'Henry', lastName: 'Gonzalez' },
    { firstName: 'Addison', lastName: 'Nelson' },
    { firstName: 'Joseph', lastName: 'Carter' },
    { firstName: 'Brooklyn', lastName: 'Mitchell' },
    { firstName: 'Andrew', lastName: 'Perez' },
    { firstName: 'Samantha', lastName: 'Roberts' },
    { firstName: 'Isaac', lastName: 'Turner' },
    { firstName: 'Maya', lastName: 'Phillips' },
    { firstName: 'Jason', lastName: 'Campbell' },
    { firstName: 'Katherine', lastName: 'Parker' },
    { firstName: 'Nathan', lastName: 'Evans' },
    { firstName: 'Alice', lastName: 'Edwards' },
    { firstName: 'Thomas', lastName: 'Collins' },
    { firstName: 'Audrey', lastName: 'Stewart' },
    { firstName: 'Leonardo', lastName: 'Sanchez' },
    { firstName: 'Rachel', lastName: 'Morris' },
    { firstName: 'Jackson', lastName: 'Nguyen' },
    { firstName: 'Hazel', lastName: 'Rogers' },
    { firstName: 'Wyatt', lastName: 'Reed' },
    { firstName: 'Caroline', lastName: 'Cook' },
    { firstName: 'Julian', lastName: 'Morgan' },
    { firstName: 'Victoria', lastName: 'Bell' }
  ],
      
  Netherland: [
  { firstName: 'Lars', lastName: 'Jansen' },
  { firstName: 'Finn', lastName: 'Bakker' },
  { firstName: 'Daan', lastName: 'Visser' },
  { firstName: 'Milan', lastName: 'Smit' },
  { firstName: 'Ruben', lastName: 'de Boer' },
  { firstName: 'Jesse', lastName: 'Kok' },
  { firstName: 'Niels', lastName: 'Meijer' },
  { firstName: 'Sven', lastName: 'Vries' },
  { firstName: 'Timo', lastName: 'Dijk' },
  { firstName: 'Koen', lastName: 'Mulder' },
  { firstName: 'Bram', lastName: 'Groot' },
  { firstName: 'Thijs', lastName: 'Bos' },
  { firstName: 'Sem', lastName: 'Vos' },
  { firstName: 'Luuk', lastName: 'Peters' },
  { firstName: 'Jasper', lastName: 'Hendriks' },
  { firstName: 'Stijn', lastName: 'Leeuwen' },
  { firstName: 'Wout', lastName: 'Bruin' },
  { firstName: 'Hugo', lastName: 'Berg' },
  { firstName: 'Tijn', lastName: 'Jong' },
  { firstName: 'Rik', lastName: 'Schouten' }
  ]
};

const COUNTRY = ['Poland', 'Canada', 'Netherland']
count = 0;
const formatDateTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

function updateStatus(message) {
  if (process.stdout.isTTY) {
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(message);
  } else {
    console.log("\n"+message);
  }
}

const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const cnd = "C07A8MD2X08"

const signup = async (page, emailAddress) => {
  try {
    // Close the cookie consent popup if it appears
    updateStatus("Close Cookie consent");
    await page.waitForSelector(
      'div#onetrust-close-btn-container button[aria-label="Close"]');
    await page.$eval(
      'div#onetrust-close-btn-container button[aria-label="Close"]',
      (el) => el.click()
    );
    updateStatus("Cookie consent popup closed");
    await delay(500);

    // Click on 'Work' button
    updateStatus("Select freelancer");
    await page.screenshot({ path: "state2.png" }); // Add screenshot here
    await page.waitForSelector('[data-qa="work"]', { timeout: 10000 });
    await page.$eval('[data-qa="work"]', (el) => el.click());
    await delay(500);

    await page.$eval(`button[type="button"][data-qa="btn-apply"]`, (el) =>
      el.click()
    );
    await delay(500);

    const rand = COUNTRY[randomInt(3)];
    console.log(rand);

    const randomIndex = Math.floor(Math.random() * nameArray[rand].length);
    const { firstName, lastName } = nameArray[rand][randomIndex];

    console.log(firstName, lastName);

    updateStatus("Input name & emailAddress");
    await page.waitForSelector("#first-name-input", { timeout: 10000 });
    await page.type("#first-name-input", firstName);
    await delay(500);
    await page.type("#last-name-input", lastName);
    await delay(500);
    await page.type("#redesigned-input-email", emailAddress);
    await delay(500);
    await page.type("#password-input", PASSWORD);
    await delay(500);

    // Wait for the country dropdown to appear and select country
    updateStatus("Select country-name...");
    await page.waitForSelector('[aria-labelledby*="select-a-country"]', {
      timeout: 10000,
    });
    await delay(500);
    await page.waitForSelector("#checkbox-terms", { timeout: 10000 });
    await page.$eval("#checkbox-terms", (el) => el.click());
    await delay(1000);
    await page.waitForSelector("#button-submit-form", { timeout: 10000 });
    let maxRetries = 7;
    let verificationFailed = false;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      updateStatus(`Attempt ${attempt} of ${maxRetries}`);

      const buttonExists = await page.$("#button-submit-form") !== null;
      if (!buttonExists) {
        updateStatus("Button not found, Checking Sing up");
        break;
      }

      await page.$eval("#button-submit-form", (el) => el.click());
      await delay(3000);

      let pageContent = await page.content();
      verificationFailed = pageContent.includes("Verification failed. Please try again.");

      serverError = pageContent.includes("This almost never happens, but something went wrong.");
      

      if (serverError) {
        throw new Error("Sign UP Failed due to server error");
      }

      isSignup = pageContent.includes("Congratulations, your account has been created. Let's get you started!");

      if (isSignup) {
        break;
      }

      if (verificationFailed) {
        updateStatus("Verification failed alert detected. Retrying submission...");
      }
      await delay(3000);
    }

    updateStatus("Checking Sign up...");

    try {
      await page.waitForFunction(
        () => document.body.innerText.includes("Congratulations, your account has been created. Let's get you started!"),
        { timeout: 30000 }
      );
    } catch (error) {
      throw new Error("Sign UP Failed");
    }

    updateStatus("URL changed to the verification page.");
    updateStatus('Sign UP success! Check connect.');
  } catch (error) {
    updateStatus(`Error in signup: ${error.message}`);
    throw error;
  }
};

const checkConnect = async (page, emailAddress, PASSWORD, server) => {
  try {
    await delay(5000);
    await retry(() =>
      page.goto(
        "https://www.upwork.com/jobs/~021846954070153177817",{
          waitUntil: "domcontentloaded",
        })
    );
    await page.waitForSelector('[data-test="ConnectsMobile"] .flex-sm-1', { timeout: 30000 });

    // Evaluate the page content to check for the specific string
    const hasConnect = await page.evaluate(() => {
      const element = document.querySelector('[data-test="ConnectsMobile"] .flex-sm-1');
      return element && element.textContent.includes('10 available');
    });
    await delay(500);
    
    const suspended = await page.evaluate(() => {
      const elements = document.querySelectorAll("div.air3-alert-content");
      return Array.from(elements)
        .map((el) => el.textContent)
        .join(" ");
    });

    if (hasConnect && 
      (!suspended.includes("You are unable to complete ID Verification due to a suspension on your account."
    ))) {
      const date = formatDateTime();
      const logEntry = `Kaka ${date} ${server} ${emailAddress} P: ${PASSWORD}\n`;
      count++;

      sendSlackMessage (`${logEntry}`);
      return true;
    }
    return false;
  } catch (error) {
    updateStatus(`Error in checkConnect: ${error.message}`);
    const date = formatDateTime();
    const logEntry = `Error Connect ${date} ${server} ${emailAddress} P: ${PASSWORD}\n`;
    sendSlackMessage(logEntry, false)
    throw error;
  }
};

const readMail = async (emailAddress) => {
  updateStatus("Email not found. Retrying...");
  try {
    // Post a message to the channel
    await web.chat.postMessage({
      channel: cnd,
      text: emailAddress,
    });
  } catch (error) {
    console.log("send message error!");
  }
  await delay(500);
};

const randomNumber = () => Math.floor(Math.random() * 10000000);

async function CheckHumanVerificationPresent(page) {
  try {
      let isPresent = false;
      const startTime = Date.now();
      await page.screenshot({ path: "signup.png" });
      while (!isPresent) {
        if(Date.now() - startTime > 30 * 1000)
          break;
        
        let pageContent = await page.content();
        isPresent = pageContent.includes("Join as a client or freelancer");

        if (!isPresent) {
          updateStatus("Findind & avoid Verify you are human");
          const currentTime = Date.now();
          const interval = 20;
          const startX = 10;
          const startY = 220;
          const endX = 100;
          const endY = 380;

          for (let y = startY; y <= endY; y += interval) {
            for (let x = startX; x <= endX; x += interval) {
              updateStatus(`Clicking at: (${x}, ${y})`);
              await page.mouse.click(x, y);
              await delay(10);
            }
          }

          await delay(1500); // Wait for 1 second (adjust as needed)
          updateStatus("click");
        }
      }

      updateStatus("Verification text has disappeared.");
      return isPresent;
  } catch (error) {
      console.error(`Error checking human verification for `, error);
      return false;
  }
}

const getProxy = async () => {
  try {
    const proxies = await fs.readFile("proxy_1.txt", 'utf-8');
    const proxyList = proxies
      .split('\n')
      .map(proxy => proxy.trim())
      .filter(proxy => proxy !== '')
      .map(proxy => {
        const [server, username, password] = proxy.split(',');
        return { server, username, password };
      });

    if (proxyList.length === 0) {
      throw new Error('proxy list is empty');
    }
    return proxyList;
  } catch (error) {
    throw new Error(`Error reading username file: ${error.message}`);
  }
}

let browser;
const startScript = async () => {
  const proxies = await getProxy();
  let proxyIndex = 0;
  const startTime = Date.now();

  while (true) {

    const { server, username, password } = proxies[proxyIndex];
    proxyIndex = (proxyIndex + 1) % proxies.length;

    browser = await pt.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--disable-gpu",
        "--start-maximized",
        "--window-size=800x600",
        "--disable-infobars",
        "--disable-features=site-per-process",
        "--disable-web-security",
        "--disable-features=IsolateOrigins",
        '--disable-site-isolation-trials',
        '--window-position=50,2000',
        "--disable-blink-features=AutomationControlled",
        `--proxy-server=${server}`,
      ],
    });

    try {
      const start = performance.now();
      const [page] = await browser.pages();

      await page.authenticate({
        username: username,
        password: password,
      });
      await page.setViewport({ width: 800, height:600, deviceScaleFactor: 1,isLandscape: false});
      const userAgent = new UserAgent();
      await page.setUserAgent(userAgent.toString());
      await page.setExtraHTTPHeaders({
        "Accept-Language": "en-US,en;q=0.9",
      });

      // await page.evaluateOnNewDocument(() => {
      //   Object.defineProperty(navigator, "webdriver", {
      //     get: () => false,
      //   });
      // });
      const emailAddress = `${faker.person.firstName(
        "male"
      )}${faker.person.lastName()}${randomNumber()}@${domainList[randomInt(domainList.length)]}`;
      updateStatus(`${formatDateTime()} ${emailAddress}`);
      updateStatus("Preparing upwork signup page...");
      await retry(() =>
        page.goto("https://www.upwork.com/nx/signup/?dest=home", {
          waitUntil: "domcontentloaded",
        })
      );
      // await delay(10000);
      const status = await CheckHumanVerificationPresent(page);

      // sendSlackMessage('123', false);

      await signup(page, emailAddress);
      console.log(`${server} \n`)
      const hasConnect = await checkConnect(page, emailAddress, PASSWORD, server);

      updateStatus(
        `${formatDateTime()} ${emailAddress} => ${
          (performance.now() - start) / 1000
        }s : ${
          hasConnect ? chalk.bgGreen(hasConnect) : chalk.bgRed(hasConnect)
        } \n`
      );
    } catch (error) {
      updateStatus(`Error occurred: ${error.message}\n`);
    } finally {
      if (browser) {
        const delay_time = 10000 + Math.random() * 5000;
        await delay(delay_time);
        await browser.close();
      }
    }
  }
};

const retry = async (fn, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      updateStatus(`Retry ${i + 1} failed: ${error.message}`);
      if (i === retries - 1) throw error;
      await delay(5000);
    }
  }
};

// Handle termination signals to close the browser
const handleExit = async (signal) => {
  updateStatus(`Received ${signal}. Closing browser...`);
  if (browser) {
    await browser.close();
  }
  process.exit(0);
};

process.on("SIGINT", handleExit);
process.on("SIGTERM", handleExit);

startScript();
