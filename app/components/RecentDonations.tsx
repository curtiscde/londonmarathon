import React from 'react';
import { Donation } from '../fundraising/types/Donation';
import DonationCard from './DonationCard';

const sortDonations = (donations: Donation[]) => donations.sort((a, b) => (a.donationDateTimestamp < b.donationDateTimestamp ? 1 : -1));

export default function RecentDonations({ donations }: { donations: Donation[] }) {
  return (
    <>
      <div className="grid col-span-12">
        <div className="divider">Recent Donations</div>
      </div>

      {sortDonations(donations).map((donation) => (
        <div key={donation.id} className="grid col-span-12 md:col-span-4">
          <DonationCard donation={donation} />
        </div>
      ))}

      <div className="grid col-span-12 place-items-center">
        <button className="btn btn-wide">Load More Donations</button>
      </div>
    </>
  );
}
