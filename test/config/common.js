
import { describe } from "mocha";
import supertest from "supertest";
import { expect } from "chai";
import URLS from "./URL's";
const request = supertest(URLS.BaseURL)
export default request;
