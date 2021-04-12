export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type CAsset = {
  __typename?: 'Asset';
  sys: CSys;
  contentfulMetadata: CContentfulMetadata;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<CAssetLinkingCollections>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type CAssetUrlArgs = {
  transform?: Maybe<CImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type CAssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CAssetCollection = {
  __typename?: 'AssetCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CAsset>>;
};

export type CAssetFilter = {
  sys?: Maybe<CSysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType?: Maybe<Scalars['String']>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<CAssetFilter>>>;
  AND?: Maybe<Array<Maybe<CAssetFilter>>>;
};

export type CAssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<CEntryCollection>;
  eventCollection?: Maybe<CEventCollection>;
  personCollection?: Maybe<CPersonCollection>;
  timeCollection?: Maybe<CTimeCollection>;
};


export type CAssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CAssetLinkingCollectionsEventCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CAssetLinkingCollectionsPersonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CAssetLinkingCollectionsTimeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum CAssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type CBibleBook = CEntry & {
  __typename?: 'BibleBook';
  sys: CSys;
  contentfulMetadata: CContentfulMetadata;
  linkedFrom?: Maybe<CBibleBookLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  writerCollection?: Maybe<CBibleBookWriterCollection>;
  placeWritten?: Maybe<Scalars['String']>;
  yearWritingStart?: Maybe<Scalars['Int']>;
  yearWritingEnd?: Maybe<Scalars['Int']>;
  timeCoveredText?: Maybe<Scalars['String']>;
  timeCoveredStart?: Maybe<Scalars['Int']>;
  timeCoveredEnd?: Maybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type CBibleBookLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type CBibleBookNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type CBibleBookWriterCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type CBibleBookPlaceWrittenArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type CBibleBookYearWritingStartArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type CBibleBookYearWritingEndArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type CBibleBookTimeCoveredTextArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type CBibleBookTimeCoveredStartArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type CBibleBookTimeCoveredEndArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type CBibleBookCollection = {
  __typename?: 'BibleBookCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CBibleBook>>;
};

export type CBibleBookFilter = {
  sys?: Maybe<CSysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  writerCollection_exists?: Maybe<Scalars['Boolean']>;
  placeWritten_exists?: Maybe<Scalars['Boolean']>;
  placeWritten?: Maybe<Scalars['String']>;
  placeWritten_not?: Maybe<Scalars['String']>;
  placeWritten_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  placeWritten_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  placeWritten_contains?: Maybe<Scalars['String']>;
  placeWritten_not_contains?: Maybe<Scalars['String']>;
  yearWritingStart_exists?: Maybe<Scalars['Boolean']>;
  yearWritingStart?: Maybe<Scalars['Int']>;
  yearWritingStart_not?: Maybe<Scalars['Int']>;
  yearWritingStart_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  yearWritingStart_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  yearWritingStart_gt?: Maybe<Scalars['Int']>;
  yearWritingStart_gte?: Maybe<Scalars['Int']>;
  yearWritingStart_lt?: Maybe<Scalars['Int']>;
  yearWritingStart_lte?: Maybe<Scalars['Int']>;
  yearWritingEnd_exists?: Maybe<Scalars['Boolean']>;
  yearWritingEnd?: Maybe<Scalars['Int']>;
  yearWritingEnd_not?: Maybe<Scalars['Int']>;
  yearWritingEnd_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  yearWritingEnd_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  yearWritingEnd_gt?: Maybe<Scalars['Int']>;
  yearWritingEnd_gte?: Maybe<Scalars['Int']>;
  yearWritingEnd_lt?: Maybe<Scalars['Int']>;
  yearWritingEnd_lte?: Maybe<Scalars['Int']>;
  timeCoveredText_exists?: Maybe<Scalars['Boolean']>;
  timeCoveredText?: Maybe<Scalars['String']>;
  timeCoveredText_not?: Maybe<Scalars['String']>;
  timeCoveredText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  timeCoveredText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  timeCoveredText_contains?: Maybe<Scalars['String']>;
  timeCoveredText_not_contains?: Maybe<Scalars['String']>;
  timeCoveredStart_exists?: Maybe<Scalars['Boolean']>;
  timeCoveredStart?: Maybe<Scalars['Int']>;
  timeCoveredStart_not?: Maybe<Scalars['Int']>;
  timeCoveredStart_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  timeCoveredStart_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  timeCoveredStart_gt?: Maybe<Scalars['Int']>;
  timeCoveredStart_gte?: Maybe<Scalars['Int']>;
  timeCoveredStart_lt?: Maybe<Scalars['Int']>;
  timeCoveredStart_lte?: Maybe<Scalars['Int']>;
  timeCoveredEnd_exists?: Maybe<Scalars['Boolean']>;
  timeCoveredEnd?: Maybe<Scalars['Int']>;
  timeCoveredEnd_not?: Maybe<Scalars['Int']>;
  timeCoveredEnd_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  timeCoveredEnd_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  timeCoveredEnd_gt?: Maybe<Scalars['Int']>;
  timeCoveredEnd_gte?: Maybe<Scalars['Int']>;
  timeCoveredEnd_lt?: Maybe<Scalars['Int']>;
  timeCoveredEnd_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<CBibleBookFilter>>>;
  AND?: Maybe<Array<Maybe<CBibleBookFilter>>>;
};

export type CBibleBookLinkingCollections = {
  __typename?: 'BibleBookLinkingCollections';
  entryCollection?: Maybe<CEntryCollection>;
};


export type CBibleBookLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum CBibleBookOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PlaceWrittenAsc = 'placeWritten_ASC',
  PlaceWrittenDesc = 'placeWritten_DESC',
  YearWritingStartAsc = 'yearWritingStart_ASC',
  YearWritingStartDesc = 'yearWritingStart_DESC',
  YearWritingEndAsc = 'yearWritingEnd_ASC',
  YearWritingEndDesc = 'yearWritingEnd_DESC',
  TimeCoveredTextAsc = 'timeCoveredText_ASC',
  TimeCoveredTextDesc = 'timeCoveredText_DESC',
  TimeCoveredStartAsc = 'timeCoveredStart_ASC',
  TimeCoveredStartDesc = 'timeCoveredStart_DESC',
  TimeCoveredEndAsc = 'timeCoveredEnd_ASC',
  TimeCoveredEndDesc = 'timeCoveredEnd_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CBibleBookWriterCollection = {
  __typename?: 'BibleBookWriterCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CPerson>>;
};

export type CContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<CContentfulTag>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type CContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};



export type CEntry = {
  sys: CSys;
  contentfulMetadata: CContentfulMetadata;
};

export type CEntryCollection = {
  __typename?: 'EntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CEntry>>;
};

/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/event) */
export type CEvent = CEntry & {
  __typename?: 'Event';
  sys: CSys;
  contentfulMetadata: CContentfulMetadata;
  linkedFrom?: Maybe<CEventLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  image?: Maybe<CAsset>;
  richText?: Maybe<CEventRichText>;
  wolLink?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/event) */
export type CEventLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/event) */
export type CEventNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/event) */
export type CEventYearArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/event) */
export type CEventImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/event) */
export type CEventRichTextArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/event) */
export type CEventWolLinkArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type CEventCollection = {
  __typename?: 'EventCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CEvent>>;
};

export type CEventFilter = {
  sys?: Maybe<CSysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  year_exists?: Maybe<Scalars['Boolean']>;
  year?: Maybe<Scalars['Int']>;
  year_not?: Maybe<Scalars['Int']>;
  year_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  year_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  year_gt?: Maybe<Scalars['Int']>;
  year_gte?: Maybe<Scalars['Int']>;
  year_lt?: Maybe<Scalars['Int']>;
  year_lte?: Maybe<Scalars['Int']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  richText_exists?: Maybe<Scalars['Boolean']>;
  richText_contains?: Maybe<Scalars['String']>;
  richText_not_contains?: Maybe<Scalars['String']>;
  wolLink_exists?: Maybe<Scalars['Boolean']>;
  wolLink?: Maybe<Scalars['String']>;
  wolLink_not?: Maybe<Scalars['String']>;
  wolLink_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  wolLink_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  wolLink_contains?: Maybe<Scalars['String']>;
  wolLink_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CEventFilter>>>;
  AND?: Maybe<Array<Maybe<CEventFilter>>>;
};

export type CEventLinkingCollections = {
  __typename?: 'EventLinkingCollections';
  entryCollection?: Maybe<CEntryCollection>;
};


export type CEventLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum CEventOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  YearAsc = 'year_ASC',
  YearDesc = 'year_DESC',
  WolLinkAsc = 'wolLink_ASC',
  WolLinkDesc = 'wolLink_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CEventRichText = {
  __typename?: 'EventRichText';
  json: Scalars['JSON'];
  links: CEventRichTextLinks;
};

export type CEventRichTextAssets = {
  __typename?: 'EventRichTextAssets';
  hyperlink: Array<Maybe<CAsset>>;
  block: Array<Maybe<CAsset>>;
};

export type CEventRichTextEntries = {
  __typename?: 'EventRichTextEntries';
  inline: Array<Maybe<CEntry>>;
  hyperlink: Array<Maybe<CEntry>>;
  block: Array<Maybe<CEntry>>;
};

export type CEventRichTextLinks = {
  __typename?: 'EventRichTextLinks';
  entries: CEventRichTextEntries;
  assets: CEventRichTextAssets;
};


export enum CImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum CImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES'
}

export enum CImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type CImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<CImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<CImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<CImageFormat>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type CPerson = CEntry & {
  __typename?: 'Person';
  sys: CSys;
  contentfulMetadata: CContentfulMetadata;
  linkedFrom?: Maybe<CPersonLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  wolLink?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  image?: Maybe<CAsset>;
  startYear?: Maybe<Scalars['Int']>;
  startBlurriness?: Maybe<Scalars['Int']>;
  endYear?: Maybe<Scalars['Int']>;
  endBlurriness?: Maybe<Scalars['Int']>;
  stillActive?: Maybe<Scalars['Boolean']>;
  spouseCollection?: Maybe<CPersonSpouseCollection>;
  childsCollection?: Maybe<CPersonChildsCollection>;
  richText?: Maybe<CPersonRichText>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type CPersonLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type CPersonNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type CPersonWolLinkArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type CPersonGenderArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type CPersonImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type CPersonStartYearArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type CPersonStartBlurrinessArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type CPersonEndYearArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type CPersonEndBlurrinessArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type CPersonStillActiveArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type CPersonSpouseCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type CPersonChildsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type CPersonRichTextArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type CPersonChildsCollection = {
  __typename?: 'PersonChildsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CPerson>>;
};

export type CPersonCollection = {
  __typename?: 'PersonCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CPerson>>;
};

export type CPersonFilter = {
  sys?: Maybe<CSysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  wolLink_exists?: Maybe<Scalars['Boolean']>;
  wolLink?: Maybe<Scalars['String']>;
  wolLink_not?: Maybe<Scalars['String']>;
  wolLink_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  wolLink_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  wolLink_contains?: Maybe<Scalars['String']>;
  wolLink_not_contains?: Maybe<Scalars['String']>;
  gender_exists?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['String']>;
  gender_not?: Maybe<Scalars['String']>;
  gender_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender_contains?: Maybe<Scalars['String']>;
  gender_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  startYear_exists?: Maybe<Scalars['Boolean']>;
  startYear?: Maybe<Scalars['Int']>;
  startYear_not?: Maybe<Scalars['Int']>;
  startYear_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  startYear_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  startYear_gt?: Maybe<Scalars['Int']>;
  startYear_gte?: Maybe<Scalars['Int']>;
  startYear_lt?: Maybe<Scalars['Int']>;
  startYear_lte?: Maybe<Scalars['Int']>;
  startBlurriness_exists?: Maybe<Scalars['Boolean']>;
  startBlurriness?: Maybe<Scalars['Int']>;
  startBlurriness_not?: Maybe<Scalars['Int']>;
  startBlurriness_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  startBlurriness_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  startBlurriness_gt?: Maybe<Scalars['Int']>;
  startBlurriness_gte?: Maybe<Scalars['Int']>;
  startBlurriness_lt?: Maybe<Scalars['Int']>;
  startBlurriness_lte?: Maybe<Scalars['Int']>;
  endYear_exists?: Maybe<Scalars['Boolean']>;
  endYear?: Maybe<Scalars['Int']>;
  endYear_not?: Maybe<Scalars['Int']>;
  endYear_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  endYear_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  endYear_gt?: Maybe<Scalars['Int']>;
  endYear_gte?: Maybe<Scalars['Int']>;
  endYear_lt?: Maybe<Scalars['Int']>;
  endYear_lte?: Maybe<Scalars['Int']>;
  endBlurriness_exists?: Maybe<Scalars['Boolean']>;
  endBlurriness?: Maybe<Scalars['Int']>;
  endBlurriness_not?: Maybe<Scalars['Int']>;
  endBlurriness_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  endBlurriness_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  endBlurriness_gt?: Maybe<Scalars['Int']>;
  endBlurriness_gte?: Maybe<Scalars['Int']>;
  endBlurriness_lt?: Maybe<Scalars['Int']>;
  endBlurriness_lte?: Maybe<Scalars['Int']>;
  stillActive_exists?: Maybe<Scalars['Boolean']>;
  stillActive?: Maybe<Scalars['Boolean']>;
  stillActive_not?: Maybe<Scalars['Boolean']>;
  spouseCollection_exists?: Maybe<Scalars['Boolean']>;
  childsCollection_exists?: Maybe<Scalars['Boolean']>;
  richText_exists?: Maybe<Scalars['Boolean']>;
  richText_contains?: Maybe<Scalars['String']>;
  richText_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CPersonFilter>>>;
  AND?: Maybe<Array<Maybe<CPersonFilter>>>;
};

export type CPersonLinkingCollections = {
  __typename?: 'PersonLinkingCollections';
  entryCollection?: Maybe<CEntryCollection>;
  personCollection?: Maybe<CPersonCollection>;
  bibleBookCollection?: Maybe<CBibleBookCollection>;
};


export type CPersonLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CPersonLinkingCollectionsPersonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CPersonLinkingCollectionsBibleBookCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum CPersonOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  WolLinkAsc = 'wolLink_ASC',
  WolLinkDesc = 'wolLink_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  StartYearAsc = 'startYear_ASC',
  StartYearDesc = 'startYear_DESC',
  StartBlurrinessAsc = 'startBlurriness_ASC',
  StartBlurrinessDesc = 'startBlurriness_DESC',
  EndYearAsc = 'endYear_ASC',
  EndYearDesc = 'endYear_DESC',
  EndBlurrinessAsc = 'endBlurriness_ASC',
  EndBlurrinessDesc = 'endBlurriness_DESC',
  StillActiveAsc = 'stillActive_ASC',
  StillActiveDesc = 'stillActive_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CPersonRichText = {
  __typename?: 'PersonRichText';
  json: Scalars['JSON'];
  links: CPersonRichTextLinks;
};

export type CPersonRichTextAssets = {
  __typename?: 'PersonRichTextAssets';
  hyperlink: Array<Maybe<CAsset>>;
  block: Array<Maybe<CAsset>>;
};

export type CPersonRichTextEntries = {
  __typename?: 'PersonRichTextEntries';
  inline: Array<Maybe<CEntry>>;
  hyperlink: Array<Maybe<CEntry>>;
  block: Array<Maybe<CEntry>>;
};

export type CPersonRichTextLinks = {
  __typename?: 'PersonRichTextLinks';
  entries: CPersonRichTextEntries;
  assets: CPersonRichTextAssets;
};

export type CPersonSpouseCollection = {
  __typename?: 'PersonSpouseCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CPerson>>;
};


export type CQuery = {
  __typename?: 'Query';
  asset?: Maybe<CAsset>;
  assetCollection?: Maybe<CAssetCollection>;
  event?: Maybe<CEvent>;
  eventCollection?: Maybe<CEventCollection>;
  person?: Maybe<CPerson>;
  personCollection?: Maybe<CPersonCollection>;
  bibleBook?: Maybe<CBibleBook>;
  bibleBookCollection?: Maybe<CBibleBookCollection>;
  time?: Maybe<CTime>;
  timeCollection?: Maybe<CTimeCollection>;
};


export type CQueryAssetArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CQueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CAssetFilter>;
  order?: Maybe<Array<Maybe<CAssetOrder>>>;
};


export type CQueryEventArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CQueryEventCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CEventFilter>;
  order?: Maybe<Array<Maybe<CEventOrder>>>;
};


export type CQueryPersonArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CQueryPersonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CPersonFilter>;
  order?: Maybe<Array<Maybe<CPersonOrder>>>;
};


export type CQueryBibleBookArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CQueryBibleBookCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CBibleBookFilter>;
  order?: Maybe<Array<Maybe<CBibleBookOrder>>>;
};


export type CQueryTimeArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CQueryTimeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CTimeFilter>;
  order?: Maybe<Array<Maybe<CTimeOrder>>>;
};

export type CSys = {
  __typename?: 'Sys';
  id: Scalars['String'];
  spaceId: Scalars['String'];
  environmentId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
};

export type CSysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion?: Maybe<Scalars['Float']>;
  publishedVersion_not?: Maybe<Scalars['Float']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_gt?: Maybe<Scalars['Float']>;
  publishedVersion_gte?: Maybe<Scalars['Float']>;
  publishedVersion_lt?: Maybe<Scalars['Float']>;
  publishedVersion_lte?: Maybe<Scalars['Float']>;
};

/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/time) */
export type CTime = CEntry & {
  __typename?: 'Time';
  sys: CSys;
  contentfulMetadata: CContentfulMetadata;
  linkedFrom?: Maybe<CTimeLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<CAsset>;
  startYear?: Maybe<Scalars['Int']>;
  endYear?: Maybe<Scalars['Int']>;
  richText?: Maybe<CTimeRichText>;
  wolLink?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/time) */
export type CTimeLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/time) */
export type CTimeNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/time) */
export type CTimeImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/time) */
export type CTimeStartYearArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/time) */
export type CTimeEndYearArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/time) */
export type CTimeRichTextArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/time) */
export type CTimeWolLinkArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type CTimeCollection = {
  __typename?: 'TimeCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CTime>>;
};

export type CTimeFilter = {
  sys?: Maybe<CSysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  startYear_exists?: Maybe<Scalars['Boolean']>;
  startYear?: Maybe<Scalars['Int']>;
  startYear_not?: Maybe<Scalars['Int']>;
  startYear_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  startYear_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  startYear_gt?: Maybe<Scalars['Int']>;
  startYear_gte?: Maybe<Scalars['Int']>;
  startYear_lt?: Maybe<Scalars['Int']>;
  startYear_lte?: Maybe<Scalars['Int']>;
  endYear_exists?: Maybe<Scalars['Boolean']>;
  endYear?: Maybe<Scalars['Int']>;
  endYear_not?: Maybe<Scalars['Int']>;
  endYear_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  endYear_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  endYear_gt?: Maybe<Scalars['Int']>;
  endYear_gte?: Maybe<Scalars['Int']>;
  endYear_lt?: Maybe<Scalars['Int']>;
  endYear_lte?: Maybe<Scalars['Int']>;
  richText_exists?: Maybe<Scalars['Boolean']>;
  richText_contains?: Maybe<Scalars['String']>;
  richText_not_contains?: Maybe<Scalars['String']>;
  wolLink_exists?: Maybe<Scalars['Boolean']>;
  wolLink?: Maybe<Scalars['String']>;
  wolLink_not?: Maybe<Scalars['String']>;
  wolLink_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  wolLink_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  wolLink_contains?: Maybe<Scalars['String']>;
  wolLink_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CTimeFilter>>>;
  AND?: Maybe<Array<Maybe<CTimeFilter>>>;
};

export type CTimeLinkingCollections = {
  __typename?: 'TimeLinkingCollections';
  entryCollection?: Maybe<CEntryCollection>;
};


export type CTimeLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum CTimeOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StartYearAsc = 'startYear_ASC',
  StartYearDesc = 'startYear_DESC',
  EndYearAsc = 'endYear_ASC',
  EndYearDesc = 'endYear_DESC',
  WolLinkAsc = 'wolLink_ASC',
  WolLinkDesc = 'wolLink_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CTimeRichText = {
  __typename?: 'TimeRichText';
  json: Scalars['JSON'];
  links: CTimeRichTextLinks;
};

export type CTimeRichTextAssets = {
  __typename?: 'TimeRichTextAssets';
  hyperlink: Array<Maybe<CAsset>>;
  block: Array<Maybe<CAsset>>;
};

export type CTimeRichTextEntries = {
  __typename?: 'TimeRichTextEntries';
  inline: Array<Maybe<CEntry>>;
  hyperlink: Array<Maybe<CEntry>>;
  block: Array<Maybe<CEntry>>;
};

export type CTimeRichTextLinks = {
  __typename?: 'TimeRichTextLinks';
  entries: CTimeRichTextEntries;
  assets: CTimeRichTextAssets;
};
