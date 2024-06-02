import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { ZoneTemplateService } from "@app/core/http/zone-template.service";
import { ZoneTemplateDetails } from "@app/shared/models/zone-template";
import { ZoneTemplate } from "@app/shared/models/zone-template/zone-template";
import { tap } from "rxjs";


export const zonesTemplatesResolver: ResolveFn<ZoneTemplate[]> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {
        return inject(ZoneTemplateService).getTemplates();
}

export const zoneTemplateResolver: ResolveFn<ZoneTemplateDetails> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {
        const templateId = route.paramMap.get('templateId')!;
                
        return inject(ZoneTemplateService).getTemplate(templateId);
}
