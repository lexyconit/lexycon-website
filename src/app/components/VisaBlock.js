import { visaServices } from "../shared/services";
import { ServiceCard } from "./ServiceCard";

export function VisaBlock() {
    return (
        <div className="grid grid-cols-4 gap-6">
            <div className="col-start-3 col-span-2">
                <h4 className="font-title text-[1.75rem] mb-3">Visto</h4>
                <p className="max-w-[350px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {visaServices.map((service, index) => (
                <div key={index} className={service?.className}>
                    <ServiceCard
                        label={service.label}
                        image={service.image}
                    />
                </div>
            ))}
        </div>
    );
}