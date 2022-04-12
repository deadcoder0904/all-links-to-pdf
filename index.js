const { chromium } = require('playwright')

const main = async () => {
  try {
    const browser = await chromium.launch()
    const urls = [
      'https://ckarchive.com/b/wvu2hghmv0re',
      'https://ckarchive.com/b/k0umh6hz39ow',
      'https://ckarchive.com/b/lmuehmhqz9e9',
      'https://ckarchive.com/b/mvu7h5h2n82r',
      'https://ckarchive.com/b/d0ueh0hd7x64',
      'https://ckarchive.com/b/68ueh8hxpnoz',
      'https://ckarchive.com/b/xmuph6hknq94',
      'https://ckarchive.com/b/e5uph7hm0kn4',
      'https://ckarchive.com/b/xmuph6hkedv0',
      'https://ckarchive.com/b/qdu8h7hedp76',
      'https://ckarchive.com/b/zlughnh5p756',
      'https://ckarchive.com/b/lmuehmhq6e5e',
      'https://ckarchive.com/b/v8u3hrhmg2eg',
      'https://ckarchive.com/b/38uphkhxz30o',
      'https://ckarchive.com/b/0vuwh9hnq2do',
      'https://ckarchive.com/b/d0ueh0hdrpq4',
      'https://ckarchive.com/b/qdu8h7hee6wo',
      'https://ckarchive.com/b/92uzhnh44r67',
    ]
    const pdfs = urls.map(async (url, i) => {
      const page = await browser.newPage()

      console.log(`loading page: ${url}`)
      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 120000,
      })

      console.log(`saving as pdf: ${url}`)
      await page.pdf({
        path: `pdfs/${i}.pdf`,
        format: 'Letter',
        printBackground: true,
      })

      console.log(`closing page: ${url}`)
      await page.close()
    })

    Promise.all(pdfs).then(() => {
      browser.close()
    })
  } catch (error) {
    console.log(error)
  }
}

main()
