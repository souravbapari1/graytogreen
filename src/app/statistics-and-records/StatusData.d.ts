export interface StatisticsAndRecordData {
  statisticsAndRecord: StatisticsAndRecord;
}

export interface StatisticsAndRecord {
  updatedAt: string;
  count_title_list: CountTitleList[];
}

export interface CountTitleList {
  counter: string;
  id: string;
  name: string;
}
