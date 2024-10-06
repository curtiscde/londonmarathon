import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import { JustGivingDonation } from "../justGiving";

dayjs.extend(calendar);

interface DonationCardProps {
  donation: JustGivingDonation
}

export default function DonationCard({ donation }: DonationCardProps) {
  return (
    <div className="card bg-base-300 rounded-box">
      <div className="card-body">
        <h2 className="card-title">{donation.donorDisplayName}</h2>
        <h6
          className="mb-2 font-medium leading-tight text-surface/75 dark:text-neutral-300">
          {dayjs(donation.donationDate).calendar(null, {
            sameElse: "DD/MM/YYYY [at] h:mm A"
          })}
        </h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus mauris volutpat, elementum libero nec, venenatis metus. Curabitur ullamcorper purus ut libero sollicitudin, a blandit odio tincidunt. Curabitur porta magna est, sed luctus magna pellentesque ac. Sed in nisi magna. Sed dapibus, sem pellentesque finibus sollicitudin, metus nulla sodales justo, sed gravida quam dolor quis justo. Integer vel porta lacus. Integer et sollicitudin velit.
        </p>

      </div>
    </div>
  );
}
