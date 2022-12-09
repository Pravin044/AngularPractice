import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
export class DeviceDataResolverServiceguard implements Resolve<any>{
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return [{ id: "d1", name: "device1" }, { id: "2", name: "device2" }]
    }

}