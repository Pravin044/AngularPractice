import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class AccountService {

    constructor(@Inject("BaseUrl") private baseUrl: string, private httpclientRef: HttpClient) { }

    validate(user: any) {
        return this.httpclientRef.post(`${this.baseUrl}/accounts/validate`, user);
    }

    AddNewUser(userModel: any) {
        return this.httpclientRef.post(`${this.baseUrl}/new_user`, userModel)
    }
}