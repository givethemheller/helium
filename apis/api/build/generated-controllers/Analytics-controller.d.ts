import { TestResult, TestResultOwnerCreate } from "@cannabinder/cbd-shared";
import * as express from "express";
export declare class TestResultController {
    /**
     *
     * @param {object} request
     * @param {object} requestBody
     * @param {integer} page the page that is returned
     * @param {integer} count the number of records in the page
     *
     * @isInt page
     * @isInt count
     */
    AdminFindTestResult(request: express.Request, page?: number, count?: number): Promise<TestResult[]>;
    /**
     *
     * @param {object} request
     * @param {object} requestBody
     * @param {number} page page needs description
     * @param {number} count count needs description
     *
     * @isInt page non decimal
     * @isInt count non decimal
     */
    FindAnalyticss(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<TestResult[]>;
    GetAnalytics(request: express.Request, TestResultId: string): Promise<TestResult>;
    CreateAnalytics(request: express.Request, requestBody: TestResultOwnerCreate): Promise<TestResult>;
    UpdateAnalytics(TestResultId: string, requestBody: TestResult, request: express.Request): Promise<TestResult>;
    deleteAnalytics(TestResultId: string, request: express.Request): Promise<boolean>;
}
