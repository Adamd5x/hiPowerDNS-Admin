import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { ZoneTemplateService } from "@app/core/http/zone-template.service";
import { ZoneTemplate } from "@app/shared/models/zone-template/zone-template";

export const zonesTemplatesResolver: ResolveFn<ZoneTemplate[]> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {

        return inject(ZoneTemplateService).getTemplates();
}