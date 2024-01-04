import { otherServices } from "../shared/services";
import { ServicePill } from "./ServicePill";

export function OtherServices() {
    return (
        <div className="mb-20">
            <h4 className="mb-6 font-title text-[1.75rem]">Altri servizi</h4>
            <div className="inline-flex gap-3 flex-wrap">
                {otherServices.map((service, index) => (
                    <ServicePill key={index}>{service}</ServicePill>
                ))}
            </div>
        </div>
    );
}