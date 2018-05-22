export interface RequestOrderList
{
    Pageindex?: number;
    Pagesize?: number;
    EnterpriseID?: number;
    PayCenterCode?: string;
    BackStatus?: number;
    OrderId?: string;
    TravelBatchId?: string;
    TicketTimeBegion?: string;
    TicketTimeEnd?: string;
    BackTimeBegion?: string;
    BackTimeEnd?: string;
    ReviewState?: number;
    ReviewTimeBegion?: string;
    ReviewTimeEnd?: string;
    TravelRiskState?: number;
    TravelRiskType?: number;
}