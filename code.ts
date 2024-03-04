

let Research = figma.createPage();
let InProgress = figma.createPage();
let ForReview = figma.createPage();
let Prototype = figma.createPage();
let ReadyForDev = figma.createPage();
let Cover = figma.currentPage;
let CoverFrame = figma.createFrame();
let CoverHead = figma.createText();
let CoverDesc = figma.createText();

figma.currentPage.name = "📓 Cover";
Research.name = "🧬 Research";
InProgress.name = "🚧 In Progress";
ForReview.name = "👀 For Review"
Prototype.name = "🕹️ Prototype";
ReadyForDev.name = "👍 Ready for Dev";
CoverFrame.name = "Cover";

Cover.appendChild(CoverFrame);
CoverFrame.appendChild(CoverHead);
CoverFrame.appendChild(CoverDesc);
CoverFrame.resize(1240, 640);

let setPosition = (node, spacex, spacey) => { node.relativeTransform = [[1, 0, spacex], [0, 1, spacey]] };

let xCalculator = (container: FrameNode, element: TextNode) => { return ((container.width / 2) - (element.width / 2)); }

let yCalculator = (container: FrameNode, element: TextNode) => { return ((container.height / 2) - (element.height / 2)); }

let loadFontHead = async (name: string) => {
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
  CoverHead.fontName = { family: "Inter", style: "Bold" };
  CoverHead.characters = name;
  CoverHead.fontSize = 74;
  CoverHead.textAlignHorizontal = "CENTER";

}

let loadFontDesc = async (text) => {

  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  CoverDesc.fontSize = 36;
  CoverDesc.characters = text;
  CoverDesc.textAlignHorizontal = "CENTER";
  layoutText();
}
let layoutText = () => {
  let descX = xCalculator(CoverFrame, CoverDesc);
  let headX = xCalculator(CoverFrame, CoverHead);
  let headY = (yCalculator(CoverFrame, CoverHead) - 30);
  let descY = headY + CoverHead.height + 20;

  setPosition(CoverHead, headX, headY);
  setPosition(CoverDesc, descX, descY);
}
let run = async ()=>{
await loadFontHead("Add Heading");
await loadFontDesc("Add Description");
figma.notify("Project Scafolding Done 👍")
figma.closePlugin();
}

run();