export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  eventCollection?: Maybe<EventCollection>;
  personCollection?: Maybe<PersonCollection>;
  timeCollection?: Maybe<TimeCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsEventCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsPersonCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsTimeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsTimeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetLinkingCollectionsEventCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WolLinkAsc = 'wolLink_ASC',
  WolLinkDesc = 'wolLink_DESC',
  YearAsc = 'year_ASC',
  YearDesc = 'year_DESC'
}

export enum AssetLinkingCollectionsPersonCollectionOrder {
  EndBlurrinessAsc = 'endBlurriness_ASC',
  EndBlurrinessDesc = 'endBlurriness_DESC',
  EndYearAsc = 'endYear_ASC',
  EndYearDesc = 'endYear_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StartBlurrinessAsc = 'startBlurriness_ASC',
  StartBlurrinessDesc = 'startBlurriness_DESC',
  StartYearAsc = 'startYear_ASC',
  StartYearDesc = 'startYear_DESC',
  StillActiveAsc = 'stillActive_ASC',
  StillActiveDesc = 'stillActive_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WolLinkAsc = 'wolLink_ASC',
  WolLinkDesc = 'wolLink_DESC'
}

export enum AssetLinkingCollectionsTimeCollectionOrder {
  EndYearAsc = 'endYear_ASC',
  EndYearDesc = 'endYear_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StartYearAsc = 'startYear_ASC',
  StartYearDesc = 'startYear_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WolLinkAsc = 'wolLink_ASC',
  WolLinkDesc = 'wolLink_DESC'
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type BibleBook = Entry & {
  __typename?: 'BibleBook';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BibleBookLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  placeWritten?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  timeCoveredEnd?: Maybe<Scalars['Int']['output']>;
  timeCoveredStart?: Maybe<Scalars['Int']['output']>;
  timeCoveredText?: Maybe<Scalars['String']['output']>;
  writerCollection?: Maybe<BibleBookWriterCollection>;
  yearWritingEnd?: Maybe<Scalars['Int']['output']>;
  yearWritingStart?: Maybe<Scalars['Int']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type BibleBookLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type BibleBookNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type BibleBookPlaceWrittenArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type BibleBookTimeCoveredEndArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type BibleBookTimeCoveredStartArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type BibleBookTimeCoveredTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type BibleBookWriterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BibleBookWriterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type BibleBookYearWritingEndArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/bibleBook) */
export type BibleBookYearWritingStartArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type BibleBookCollection = {
  __typename?: 'BibleBookCollection';
  items: Array<Maybe<BibleBook>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BibleBookFilter = {
  AND?: InputMaybe<Array<InputMaybe<BibleBookFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BibleBookFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  placeWritten?: InputMaybe<Scalars['String']['input']>;
  placeWritten_contains?: InputMaybe<Scalars['String']['input']>;
  placeWritten_exists?: InputMaybe<Scalars['Boolean']['input']>;
  placeWritten_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  placeWritten_not?: InputMaybe<Scalars['String']['input']>;
  placeWritten_not_contains?: InputMaybe<Scalars['String']['input']>;
  placeWritten_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  timeCoveredEnd?: InputMaybe<Scalars['Int']['input']>;
  timeCoveredEnd_exists?: InputMaybe<Scalars['Boolean']['input']>;
  timeCoveredEnd_gt?: InputMaybe<Scalars['Int']['input']>;
  timeCoveredEnd_gte?: InputMaybe<Scalars['Int']['input']>;
  timeCoveredEnd_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timeCoveredEnd_lt?: InputMaybe<Scalars['Int']['input']>;
  timeCoveredEnd_lte?: InputMaybe<Scalars['Int']['input']>;
  timeCoveredEnd_not?: InputMaybe<Scalars['Int']['input']>;
  timeCoveredEnd_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timeCoveredStart?: InputMaybe<Scalars['Int']['input']>;
  timeCoveredStart_exists?: InputMaybe<Scalars['Boolean']['input']>;
  timeCoveredStart_gt?: InputMaybe<Scalars['Int']['input']>;
  timeCoveredStart_gte?: InputMaybe<Scalars['Int']['input']>;
  timeCoveredStart_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timeCoveredStart_lt?: InputMaybe<Scalars['Int']['input']>;
  timeCoveredStart_lte?: InputMaybe<Scalars['Int']['input']>;
  timeCoveredStart_not?: InputMaybe<Scalars['Int']['input']>;
  timeCoveredStart_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timeCoveredText?: InputMaybe<Scalars['String']['input']>;
  timeCoveredText_contains?: InputMaybe<Scalars['String']['input']>;
  timeCoveredText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  timeCoveredText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  timeCoveredText_not?: InputMaybe<Scalars['String']['input']>;
  timeCoveredText_not_contains?: InputMaybe<Scalars['String']['input']>;
  timeCoveredText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  writer?: InputMaybe<CfPersonNestedFilter>;
  writerCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  yearWritingEnd?: InputMaybe<Scalars['Int']['input']>;
  yearWritingEnd_exists?: InputMaybe<Scalars['Boolean']['input']>;
  yearWritingEnd_gt?: InputMaybe<Scalars['Int']['input']>;
  yearWritingEnd_gte?: InputMaybe<Scalars['Int']['input']>;
  yearWritingEnd_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  yearWritingEnd_lt?: InputMaybe<Scalars['Int']['input']>;
  yearWritingEnd_lte?: InputMaybe<Scalars['Int']['input']>;
  yearWritingEnd_not?: InputMaybe<Scalars['Int']['input']>;
  yearWritingEnd_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  yearWritingStart?: InputMaybe<Scalars['Int']['input']>;
  yearWritingStart_exists?: InputMaybe<Scalars['Boolean']['input']>;
  yearWritingStart_gt?: InputMaybe<Scalars['Int']['input']>;
  yearWritingStart_gte?: InputMaybe<Scalars['Int']['input']>;
  yearWritingStart_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  yearWritingStart_lt?: InputMaybe<Scalars['Int']['input']>;
  yearWritingStart_lte?: InputMaybe<Scalars['Int']['input']>;
  yearWritingStart_not?: InputMaybe<Scalars['Int']['input']>;
  yearWritingStart_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type BibleBookLinkingCollections = {
  __typename?: 'BibleBookLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BibleBookLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BibleBookOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PlaceWrittenAsc = 'placeWritten_ASC',
  PlaceWrittenDesc = 'placeWritten_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TimeCoveredEndAsc = 'timeCoveredEnd_ASC',
  TimeCoveredEndDesc = 'timeCoveredEnd_DESC',
  TimeCoveredStartAsc = 'timeCoveredStart_ASC',
  TimeCoveredStartDesc = 'timeCoveredStart_DESC',
  TimeCoveredTextAsc = 'timeCoveredText_ASC',
  TimeCoveredTextDesc = 'timeCoveredText_DESC',
  YearWritingEndAsc = 'yearWritingEnd_ASC',
  YearWritingEndDesc = 'yearWritingEnd_DESC',
  YearWritingStartAsc = 'yearWritingStart_ASC',
  YearWritingStartDesc = 'yearWritingStart_DESC'
}

export type BibleBookWriterCollection = {
  __typename?: 'BibleBookWriterCollection';
  items: Array<Maybe<Person>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum BibleBookWriterCollectionOrder {
  EndBlurrinessAsc = 'endBlurriness_ASC',
  EndBlurrinessDesc = 'endBlurriness_DESC',
  EndYearAsc = 'endYear_ASC',
  EndYearDesc = 'endYear_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StartBlurrinessAsc = 'startBlurriness_ASC',
  StartBlurrinessDesc = 'startBlurriness_DESC',
  StartYearAsc = 'startYear_ASC',
  StartYearDesc = 'startYear_DESC',
  StillActiveAsc = 'stillActive_ASC',
  StillActiveDesc = 'stillActive_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WolLinkAsc = 'wolLink_ASC',
  WolLinkDesc = 'wolLink_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/event) */
export type Event = Entry & {
  __typename?: 'Event';
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<EventLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  richText?: Maybe<EventRichText>;
  sys: Sys;
  wolLink?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/event) */
export type EventImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/event) */
export type EventLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/event) */
export type EventNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/event) */
export type EventRichTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/event) */
export type EventWolLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/event) */
export type EventYearArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EventCollection = {
  __typename?: 'EventCollection';
  items: Array<Maybe<Event>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EventFilter = {
  AND?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  richText_contains?: InputMaybe<Scalars['String']['input']>;
  richText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  richText_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  wolLink?: InputMaybe<Scalars['String']['input']>;
  wolLink_contains?: InputMaybe<Scalars['String']['input']>;
  wolLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  wolLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wolLink_not?: InputMaybe<Scalars['String']['input']>;
  wolLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  wolLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  year?: InputMaybe<Scalars['Int']['input']>;
  year_exists?: InputMaybe<Scalars['Boolean']['input']>;
  year_gt?: InputMaybe<Scalars['Int']['input']>;
  year_gte?: InputMaybe<Scalars['Int']['input']>;
  year_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  year_lt?: InputMaybe<Scalars['Int']['input']>;
  year_lte?: InputMaybe<Scalars['Int']['input']>;
  year_not?: InputMaybe<Scalars['Int']['input']>;
  year_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type EventLinkingCollections = {
  __typename?: 'EventLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type EventLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EventOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WolLinkAsc = 'wolLink_ASC',
  WolLinkDesc = 'wolLink_DESC',
  YearAsc = 'year_ASC',
  YearDesc = 'year_DESC'
}

export type EventRichText = {
  __typename?: 'EventRichText';
  json: Scalars['JSON']['output'];
  links: EventRichTextLinks;
};

export type EventRichTextAssets = {
  __typename?: 'EventRichTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type EventRichTextEntries = {
  __typename?: 'EventRichTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type EventRichTextLinks = {
  __typename?: 'EventRichTextLinks';
  assets: EventRichTextAssets;
  entries: EventRichTextEntries;
  resources: EventRichTextResources;
};

export type EventRichTextResources = {
  __typename?: 'EventRichTextResources';
  block: Array<ResourceLink>;
};

export enum ImageFormat {
  Avif = 'AVIF',
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

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type Person = Entry & {
  __typename?: 'Person';
  childsCollection?: Maybe<PersonChildsCollection>;
  contentfulMetadata: ContentfulMetadata;
  endBlurriness?: Maybe<Scalars['Int']['output']>;
  endYear?: Maybe<Scalars['Int']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<PersonLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  richText?: Maybe<PersonRichText>;
  spouseCollection?: Maybe<PersonSpouseCollection>;
  startBlurriness?: Maybe<Scalars['Int']['output']>;
  startYear?: Maybe<Scalars['Int']['output']>;
  stillActive?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  wolLink?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type PersonChildsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PersonChildsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type PersonEndBlurrinessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type PersonEndYearArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type PersonGenderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type PersonImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type PersonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type PersonNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type PersonRichTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type PersonSpouseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PersonSpouseCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type PersonStartBlurrinessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type PersonStartYearArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type PersonStillActiveArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/person) */
export type PersonWolLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PersonChildsCollection = {
  __typename?: 'PersonChildsCollection';
  items: Array<Maybe<Person>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PersonChildsCollectionOrder {
  EndBlurrinessAsc = 'endBlurriness_ASC',
  EndBlurrinessDesc = 'endBlurriness_DESC',
  EndYearAsc = 'endYear_ASC',
  EndYearDesc = 'endYear_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StartBlurrinessAsc = 'startBlurriness_ASC',
  StartBlurrinessDesc = 'startBlurriness_DESC',
  StartYearAsc = 'startYear_ASC',
  StartYearDesc = 'startYear_DESC',
  StillActiveAsc = 'stillActive_ASC',
  StillActiveDesc = 'stillActive_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WolLinkAsc = 'wolLink_ASC',
  WolLinkDesc = 'wolLink_DESC'
}

export type PersonCollection = {
  __typename?: 'PersonCollection';
  items: Array<Maybe<Person>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PersonFilter = {
  AND?: InputMaybe<Array<InputMaybe<PersonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PersonFilter>>>;
  childs?: InputMaybe<CfPersonNestedFilter>;
  childsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endBlurriness?: InputMaybe<Scalars['Int']['input']>;
  endBlurriness_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endBlurriness_gt?: InputMaybe<Scalars['Int']['input']>;
  endBlurriness_gte?: InputMaybe<Scalars['Int']['input']>;
  endBlurriness_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  endBlurriness_lt?: InputMaybe<Scalars['Int']['input']>;
  endBlurriness_lte?: InputMaybe<Scalars['Int']['input']>;
  endBlurriness_not?: InputMaybe<Scalars['Int']['input']>;
  endBlurriness_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  endYear?: InputMaybe<Scalars['Int']['input']>;
  endYear_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endYear_gt?: InputMaybe<Scalars['Int']['input']>;
  endYear_gte?: InputMaybe<Scalars['Int']['input']>;
  endYear_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  endYear_lt?: InputMaybe<Scalars['Int']['input']>;
  endYear_lte?: InputMaybe<Scalars['Int']['input']>;
  endYear_not?: InputMaybe<Scalars['Int']['input']>;
  endYear_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  gender?: InputMaybe<Scalars['String']['input']>;
  gender_contains?: InputMaybe<Scalars['String']['input']>;
  gender_exists?: InputMaybe<Scalars['Boolean']['input']>;
  gender_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gender_not?: InputMaybe<Scalars['String']['input']>;
  gender_not_contains?: InputMaybe<Scalars['String']['input']>;
  gender_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  richText_contains?: InputMaybe<Scalars['String']['input']>;
  richText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  richText_not_contains?: InputMaybe<Scalars['String']['input']>;
  spouse?: InputMaybe<CfPersonNestedFilter>;
  spouseCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startBlurriness?: InputMaybe<Scalars['Int']['input']>;
  startBlurriness_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startBlurriness_gt?: InputMaybe<Scalars['Int']['input']>;
  startBlurriness_gte?: InputMaybe<Scalars['Int']['input']>;
  startBlurriness_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startBlurriness_lt?: InputMaybe<Scalars['Int']['input']>;
  startBlurriness_lte?: InputMaybe<Scalars['Int']['input']>;
  startBlurriness_not?: InputMaybe<Scalars['Int']['input']>;
  startBlurriness_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startYear?: InputMaybe<Scalars['Int']['input']>;
  startYear_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startYear_gt?: InputMaybe<Scalars['Int']['input']>;
  startYear_gte?: InputMaybe<Scalars['Int']['input']>;
  startYear_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startYear_lt?: InputMaybe<Scalars['Int']['input']>;
  startYear_lte?: InputMaybe<Scalars['Int']['input']>;
  startYear_not?: InputMaybe<Scalars['Int']['input']>;
  startYear_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  stillActive?: InputMaybe<Scalars['Boolean']['input']>;
  stillActive_exists?: InputMaybe<Scalars['Boolean']['input']>;
  stillActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  wolLink?: InputMaybe<Scalars['String']['input']>;
  wolLink_contains?: InputMaybe<Scalars['String']['input']>;
  wolLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  wolLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wolLink_not?: InputMaybe<Scalars['String']['input']>;
  wolLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  wolLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PersonLinkingCollections = {
  __typename?: 'PersonLinkingCollections';
  bibleBookCollection?: Maybe<BibleBookCollection>;
  entryCollection?: Maybe<EntryCollection>;
  personCollection?: Maybe<PersonCollection>;
};


export type PersonLinkingCollectionsBibleBookCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PersonLinkingCollectionsBibleBookCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PersonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PersonLinkingCollectionsPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PersonLinkingCollectionsPersonCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PersonLinkingCollectionsBibleBookCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PlaceWrittenAsc = 'placeWritten_ASC',
  PlaceWrittenDesc = 'placeWritten_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TimeCoveredEndAsc = 'timeCoveredEnd_ASC',
  TimeCoveredEndDesc = 'timeCoveredEnd_DESC',
  TimeCoveredStartAsc = 'timeCoveredStart_ASC',
  TimeCoveredStartDesc = 'timeCoveredStart_DESC',
  TimeCoveredTextAsc = 'timeCoveredText_ASC',
  TimeCoveredTextDesc = 'timeCoveredText_DESC',
  YearWritingEndAsc = 'yearWritingEnd_ASC',
  YearWritingEndDesc = 'yearWritingEnd_DESC',
  YearWritingStartAsc = 'yearWritingStart_ASC',
  YearWritingStartDesc = 'yearWritingStart_DESC'
}

export enum PersonLinkingCollectionsPersonCollectionOrder {
  EndBlurrinessAsc = 'endBlurriness_ASC',
  EndBlurrinessDesc = 'endBlurriness_DESC',
  EndYearAsc = 'endYear_ASC',
  EndYearDesc = 'endYear_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StartBlurrinessAsc = 'startBlurriness_ASC',
  StartBlurrinessDesc = 'startBlurriness_DESC',
  StartYearAsc = 'startYear_ASC',
  StartYearDesc = 'startYear_DESC',
  StillActiveAsc = 'stillActive_ASC',
  StillActiveDesc = 'stillActive_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WolLinkAsc = 'wolLink_ASC',
  WolLinkDesc = 'wolLink_DESC'
}

export enum PersonOrder {
  EndBlurrinessAsc = 'endBlurriness_ASC',
  EndBlurrinessDesc = 'endBlurriness_DESC',
  EndYearAsc = 'endYear_ASC',
  EndYearDesc = 'endYear_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StartBlurrinessAsc = 'startBlurriness_ASC',
  StartBlurrinessDesc = 'startBlurriness_DESC',
  StartYearAsc = 'startYear_ASC',
  StartYearDesc = 'startYear_DESC',
  StillActiveAsc = 'stillActive_ASC',
  StillActiveDesc = 'stillActive_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WolLinkAsc = 'wolLink_ASC',
  WolLinkDesc = 'wolLink_DESC'
}

export type PersonRichText = {
  __typename?: 'PersonRichText';
  json: Scalars['JSON']['output'];
  links: PersonRichTextLinks;
};

export type PersonRichTextAssets = {
  __typename?: 'PersonRichTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PersonRichTextEntries = {
  __typename?: 'PersonRichTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PersonRichTextLinks = {
  __typename?: 'PersonRichTextLinks';
  assets: PersonRichTextAssets;
  entries: PersonRichTextEntries;
  resources: PersonRichTextResources;
};

export type PersonRichTextResources = {
  __typename?: 'PersonRichTextResources';
  block: Array<ResourceLink>;
};

export type PersonSpouseCollection = {
  __typename?: 'PersonSpouseCollection';
  items: Array<Maybe<Person>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PersonSpouseCollectionOrder {
  EndBlurrinessAsc = 'endBlurriness_ASC',
  EndBlurrinessDesc = 'endBlurriness_DESC',
  EndYearAsc = 'endYear_ASC',
  EndYearDesc = 'endYear_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StartBlurrinessAsc = 'startBlurriness_ASC',
  StartBlurrinessDesc = 'startBlurriness_DESC',
  StartYearAsc = 'startYear_ASC',
  StartYearDesc = 'startYear_DESC',
  StillActiveAsc = 'stillActive_ASC',
  StillActiveDesc = 'stillActive_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WolLinkAsc = 'wolLink_ASC',
  WolLinkDesc = 'wolLink_DESC'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  bibleBook?: Maybe<BibleBook>;
  bibleBookCollection?: Maybe<BibleBookCollection>;
  entryCollection?: Maybe<EntryCollection>;
  event?: Maybe<Event>;
  eventCollection?: Maybe<EventCollection>;
  person?: Maybe<Person>;
  personCollection?: Maybe<PersonCollection>;
  time?: Maybe<Time>;
  timeCollection?: Maybe<TimeCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBibleBookArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBibleBookCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BibleBookOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BibleBookFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryEventArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventFilter>;
};


export type QueryPersonArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PersonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonFilter>;
};


export type QueryTimeArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTimeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TimeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TimeFilter>;
};

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  type: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/time) */
export type Time = Entry & {
  __typename?: 'Time';
  contentfulMetadata: ContentfulMetadata;
  endYear?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<TimeLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  richText?: Maybe<TimeRichText>;
  startYear?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  wolLink?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/time) */
export type TimeEndYearArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/time) */
export type TimeImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/time) */
export type TimeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/time) */
export type TimeNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/time) */
export type TimeRichTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/time) */
export type TimeStartYearArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/81noh8m93vcd/content_types/time) */
export type TimeWolLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TimeCollection = {
  __typename?: 'TimeCollection';
  items: Array<Maybe<Time>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TimeFilter = {
  AND?: InputMaybe<Array<InputMaybe<TimeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TimeFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endYear?: InputMaybe<Scalars['Int']['input']>;
  endYear_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endYear_gt?: InputMaybe<Scalars['Int']['input']>;
  endYear_gte?: InputMaybe<Scalars['Int']['input']>;
  endYear_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  endYear_lt?: InputMaybe<Scalars['Int']['input']>;
  endYear_lte?: InputMaybe<Scalars['Int']['input']>;
  endYear_not?: InputMaybe<Scalars['Int']['input']>;
  endYear_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  richText_contains?: InputMaybe<Scalars['String']['input']>;
  richText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  richText_not_contains?: InputMaybe<Scalars['String']['input']>;
  startYear?: InputMaybe<Scalars['Int']['input']>;
  startYear_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startYear_gt?: InputMaybe<Scalars['Int']['input']>;
  startYear_gte?: InputMaybe<Scalars['Int']['input']>;
  startYear_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startYear_lt?: InputMaybe<Scalars['Int']['input']>;
  startYear_lte?: InputMaybe<Scalars['Int']['input']>;
  startYear_not?: InputMaybe<Scalars['Int']['input']>;
  startYear_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  wolLink?: InputMaybe<Scalars['String']['input']>;
  wolLink_contains?: InputMaybe<Scalars['String']['input']>;
  wolLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  wolLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wolLink_not?: InputMaybe<Scalars['String']['input']>;
  wolLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  wolLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TimeLinkingCollections = {
  __typename?: 'TimeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TimeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TimeOrder {
  EndYearAsc = 'endYear_ASC',
  EndYearDesc = 'endYear_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StartYearAsc = 'startYear_ASC',
  StartYearDesc = 'startYear_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WolLinkAsc = 'wolLink_ASC',
  WolLinkDesc = 'wolLink_DESC'
}

export type TimeRichText = {
  __typename?: 'TimeRichText';
  json: Scalars['JSON']['output'];
  links: TimeRichTextLinks;
};

export type TimeRichTextAssets = {
  __typename?: 'TimeRichTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TimeRichTextEntries = {
  __typename?: 'TimeRichTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TimeRichTextLinks = {
  __typename?: 'TimeRichTextLinks';
  assets: TimeRichTextAssets;
  entries: TimeRichTextEntries;
  resources: TimeRichTextResources;
};

export type TimeRichTextResources = {
  __typename?: 'TimeRichTextResources';
  block: Array<ResourceLink>;
};

export type CfPersonNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPersonNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPersonNestedFilter>>>;
  childsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endBlurriness?: InputMaybe<Scalars['Int']['input']>;
  endBlurriness_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endBlurriness_gt?: InputMaybe<Scalars['Int']['input']>;
  endBlurriness_gte?: InputMaybe<Scalars['Int']['input']>;
  endBlurriness_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  endBlurriness_lt?: InputMaybe<Scalars['Int']['input']>;
  endBlurriness_lte?: InputMaybe<Scalars['Int']['input']>;
  endBlurriness_not?: InputMaybe<Scalars['Int']['input']>;
  endBlurriness_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  endYear?: InputMaybe<Scalars['Int']['input']>;
  endYear_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endYear_gt?: InputMaybe<Scalars['Int']['input']>;
  endYear_gte?: InputMaybe<Scalars['Int']['input']>;
  endYear_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  endYear_lt?: InputMaybe<Scalars['Int']['input']>;
  endYear_lte?: InputMaybe<Scalars['Int']['input']>;
  endYear_not?: InputMaybe<Scalars['Int']['input']>;
  endYear_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  gender?: InputMaybe<Scalars['String']['input']>;
  gender_contains?: InputMaybe<Scalars['String']['input']>;
  gender_exists?: InputMaybe<Scalars['Boolean']['input']>;
  gender_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gender_not?: InputMaybe<Scalars['String']['input']>;
  gender_not_contains?: InputMaybe<Scalars['String']['input']>;
  gender_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  richText_contains?: InputMaybe<Scalars['String']['input']>;
  richText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  richText_not_contains?: InputMaybe<Scalars['String']['input']>;
  spouseCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startBlurriness?: InputMaybe<Scalars['Int']['input']>;
  startBlurriness_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startBlurriness_gt?: InputMaybe<Scalars['Int']['input']>;
  startBlurriness_gte?: InputMaybe<Scalars['Int']['input']>;
  startBlurriness_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startBlurriness_lt?: InputMaybe<Scalars['Int']['input']>;
  startBlurriness_lte?: InputMaybe<Scalars['Int']['input']>;
  startBlurriness_not?: InputMaybe<Scalars['Int']['input']>;
  startBlurriness_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startYear?: InputMaybe<Scalars['Int']['input']>;
  startYear_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startYear_gt?: InputMaybe<Scalars['Int']['input']>;
  startYear_gte?: InputMaybe<Scalars['Int']['input']>;
  startYear_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startYear_lt?: InputMaybe<Scalars['Int']['input']>;
  startYear_lte?: InputMaybe<Scalars['Int']['input']>;
  startYear_not?: InputMaybe<Scalars['Int']['input']>;
  startYear_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  stillActive?: InputMaybe<Scalars['Boolean']['input']>;
  stillActive_exists?: InputMaybe<Scalars['Boolean']['input']>;
  stillActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  wolLink?: InputMaybe<Scalars['String']['input']>;
  wolLink_contains?: InputMaybe<Scalars['String']['input']>;
  wolLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  wolLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wolLink_not?: InputMaybe<Scalars['String']['input']>;
  wolLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  wolLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
