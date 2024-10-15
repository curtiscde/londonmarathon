import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import { Donation } from '../fundraising/types/Donation';

dayjs.extend(calendar);

interface DonationCardProps {
  donation: Donation
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
        <div className="stats shadow w-full mt-2 mb-4">
          <div className="stat">
            <div className="stat-title">Donation Amount</div>
            <div className="stat-value">&pound;{donation.displayAmount}</div>
          </div>
          {
            donation.donationMap != null &&
            <div className="stat">
              <div className="stat-title">Donation Distance</div>
              <div className="stat-value">{donation.donationMap.donationDistanceDisplay}</div>
            </div>
          }
        </div>
        <blockquote>
          <p>
            &quot;{donation.message}&quot;
          </p>
        </blockquote>
      </div>
    </div>
  );
}