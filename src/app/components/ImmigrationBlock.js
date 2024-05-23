import { immigrationServices } from "../shared/services";
import { ServiceCard } from "./ServiceCard";

export function ImmigrationBlock() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-6">
            <div className="col-span-2 mb-6 md:mb-0">
                <h3 className="font-title text-2xl sm:text-[1.75rem] mb-3">Immigrazione</h3>
                <p className="md:max-w-[350px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac gravida felis. Nulla non congue neque. Suspendisse rhoncus consectetur tincidunt. Cras eleifend eros urna, a aliquam ligula pharetra eu.</p>
            </div>
            {immigrationServices.map((service, index) => (
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