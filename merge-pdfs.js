const PDFMerger = require('pdf-merger-js')

const merger = new PDFMerger()

const main = async () => {
  for (let i = 0; i < 18; i++) {
    merger.add(`pdfs/${i}.pdf`)
  }
  await merger.save('pdfs/all-access-pass-by-shaan-puri.pdf')
}

main()
