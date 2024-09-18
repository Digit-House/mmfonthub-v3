export interface Font {
  nameEn: string;
  name: string;
  fileName: string;
  fontSupportType: string;
  fontStyle: string;
  createdBy: string;
  enSupport: string;
  acceptToDownload: string;
  downloadLink: string;
  creatorLink: string;
}

export interface FontsJSON {
  [fontName: string]: Font;
}
