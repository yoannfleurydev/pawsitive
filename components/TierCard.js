export const TierCard = ({ tier, ...rest }) => {
  return (
    <div
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
      {...rest}
    >
      <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
        <div>
          <h3
            className="inline-flex py-1 text-2xl font-semibold tracking-wide text-brand-600"
            id="tier-standard"
          >
            {tier.name}
          </h3>
        </div>
        <div className="mt-4 flex items-baseline text-4xl font-extrabold">
          {tier.priceSession}€
          <span className="ml-1 text-2xl font-medium text-gray-500">
            par séance
          </span>
        </div>
        <div className="mt-4 flex items-baseline text-2xl font-extrabold">
          <span className="mr-1 text-2xl font-medium text-gray-500">
            Forfait
          </span>
          {tier.plan.price}€
          <span className="mx-1 text-2xl font-medium text-gray-500">pour</span>
          {tier.plan.numberOfSession}
          <span className="ml-1 text-2xl font-medium text-gray-500">
            séances
          </span>
        </div>
        <p className="mt-5 text-lg text-gray-500">{tier.description}</p>
      </div>
      <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
        <ul className="space-y-4">
          {tier.informations.map((feature) => (
            <li key={feature} className="flex items-start">
              <p className="ml-3 text-base text-gray-700">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
