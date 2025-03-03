enum Type {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT",
}

enum Status {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

interface ISite {
  id: number;
  url: string;
}

interface ITest {
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteId: number;
}

export type { ISite, ITest, Type, Status };
