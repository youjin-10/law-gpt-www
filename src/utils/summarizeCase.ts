import xml2js from "xml2js";

async function summarizeCase(keywordList: string[], numCaseSummary = 3) {
  const parentUrl = "http://www.law.go.kr";
  const caseSummaryDict: any = {};

  for (const keyword of keywordList) {
    caseSummaryDict[keyword] = [];
    const url = `${parentUrl}/DRF/lawSearch.do?OC=dudgus5432&target=prec&type=XML&query=${encodeURIComponent(
      keyword
    )}`;

    const response = await fetch(url);
    const xmlData = await response.text();

    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(xmlData);

    if (result.PrecSearch.totalCnt[0] === "0") {
      continue;
    }

    // const precs = result.lawSearch.prec;
    const precs = result.PrecSearch.prec;

    for (let i = 0; i < precs.length; i++) {
      if (numCaseSummary === i) {
        break;
      }

      const prec = precs[i];
      //   const caseLawDetailsLink = prec["case law details link"][0];
      const caseLawDetailsLink = prec["판례상세링크"][0];

      if (caseLawDetailsLink) {
        let caseLink = parentUrl + caseLawDetailsLink;
        caseLink = caseLink.replace("HTML", "XML");

        const caseResponse = await fetch(caseLink);
        const caseXmlData = await caseResponse.text();
        const caseResult = await parser.parseStringPromise(caseXmlData);

        // const caseSummary = caseResult.lawSearch["Summary of Judgment"][0];
        const caseSummary = caseResult.PrecService["판결요지"][0];
        caseSummaryDict[keyword].push(caseSummary);
        console.log(caseSummary);
      }
    }
  }

  return caseSummaryDict;
}

export default summarizeCase;
