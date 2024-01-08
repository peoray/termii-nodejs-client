import { Insights } from './insights'

export class InsightsHandler {
  private insigntsInstance: Insights

  constructor(apiKey: string) {
    this.insigntsInstance = new Insights(apiKey)
  }

  public get insights() {
    return {
      getBalance: this.insigntsInstance.getBalance.bind(this.insigntsInstance),
      search: this.insigntsInstance.search.bind(this.insigntsInstance),
      getStatus: this.insigntsInstance.getStatus.bind(this.insigntsInstance),
    }
  }
}
