const page = () => {
  return (
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      <div>
        <h1 className="font-bold text-3xl">
          Terms of Service: Important Information for Our Contributors
        </h1>

        <h1 className="font-bold pt-10 text-xl">
          "Your Share of the Creativity Pie: Earning as a Contributor"
        </h1>

        <h1 className="font-bold py-4"> How It Works:</h1>
        <p>
          At BillionPic, we believe in rewarding our talented contributors for
          their artistry. We allocate <span className="font-bold">25%</span> of
          our net profits to be shared among all the contributors whose images
          have been used*.
        </p>
        <h1 className="font-bold py-4">Here's a simple breakdown:</h1>
        <ul>
          <li className="list-disc py-2">
            <span className="font-bold">Company Profits:</span> Let's say the
            company makes a total profit of
            <span className="font-bold">$100,000</span>.
          </li>
          <li className="list-disc py-2">
            <span className="font-bold">Contributor's Share:</span> We allocate{" "}
            <span className="font-bold">25%</span> of this profit to be shared
            with our contributors, which equals{" "}
            <span className="font-bold">$25,000</span>.
          </li>
          <li className="list-disc py-2">
            <span className="font-bold">Your Contribution:</span> If there were
            a total of <span className="font-bold">1,000</span> images used, and{" "}
            <span className="font-bold">50</span>
            of them were yours, you contributed{" "}
            <span className="font-bold">5%</span> of the total usage.
          </li>
          <li className="list-disc py-2">
            <span className="font-bold">Your Earnings:</span> So, you'll receive{" "}
            <span className="font-bold">5%</span> of the{" "}
            <span className="font-bold">$25,000</span>, which amounts to
            <span className="font-bold">$1,250</span>.
          </li>
        </ul>
        <p className="font-bold py-4">Beta Stage Notice:</p>
        <p>
          We want to keep you informed that we are currently in the beta stage
          of our platform. During this time, we are continuously improving and
          enhancing the BillionPic Platform.
        </p>
        <h1 className="font-bold py-4">Payouts Delay:</h1>
        <p>
          At this moment, we do not have the dashboard ready for tracking the
          usage of your images or of the payouts. Therefore, payouts to our valued contributors
          are temporarily delayed. We anticipate that this phase will take
          approximately 3-6 months to complete. Please note that payout timing
          is at the company's discretion.
        </p>
        <h1 className="font-bold py-4">Illustrative Numbers:</h1>
        <p>
          The numbers provided in our explanations are for illustrative purposes
          only. The actual figures may vary based on real platform performance.
        </p>
        <p>
          We appreciate your understanding and patience as we work diligently to
          bring you the best platform possible. Your creativity is valuable to
          us, and we're committed to making BillionPic a great platform for both
          our contributors and users. Thank you for being a part of our journey.
        </p>
      </div>
    </div>
  );
};

export default page;
