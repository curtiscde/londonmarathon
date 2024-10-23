import React from 'react';
import Image from 'next/image';
import Footer from './components/Footer';
import Header from './components/Header';
import Map from './components/Map';
import RecentActivities from './components/RecentActivities';
import RecentDonations from './components/RecentDonations';
import { DonationsMap } from './donationsMap';
import { Fundraising } from './fundraising';
import { Strava, StravaActivity } from './strava';

export default async function Page() {
  await DonationsMap.getRouteCoords();
  const { routeCoords, totalRouteDistance } = DonationsMap;

  await Fundraising.loadDonations();

  Fundraising.bindDonationMaps({ routeCoords, totalRouteDistance });

  const { fundraisingInfo, donations } = Fundraising;

  let stravaActivities: StravaActivity[];
  let stravaProfileUrl: string;

  if (process.env.STRAVA_REFRESH_TOKEN != null && typeof process.env.STRAVA_REFRESH_TOKEN === 'string') {
    await Strava.load(process.env.STRAVA_REFRESH_TOKEN);

    ({ activities: stravaActivities, profileUrl: stravaProfileUrl } = Strava);
  }

  return (
    <div>
      <Header />
      <main>

        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4">

            <div className="grid col-span-12">
              <div className="card lg:card-side bg-base-300">
                <figure>
                  <Image alt="placeholder" src="https://placehold.co/600x400" width={600} height={400} />
                </figure>
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla rhoncus mauris volutpat, elementum libero nec, venenatis metus.
                    Curabitur ullamcorper purus ut libero sollicitudin, a blandit odio tincidunt.
                    Curabitur porta magna est, sed luctus magna pellentesque ac.
                    Sed in nisi magna. Sed dapibus, sem pellentesque finibus sollicitudin,
                    metus nulla sodales justo, sed gravida quam dolor quis justo.
                    Integer vel porta lacus. Integer et sollicitudin velit.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid col-span-12">
              <div className="card bg-base-300 rounded-box place-items-center">
                <div className="card-body items-center text-center w-full">
                  <Map routeCoords={routeCoords} donations={donations} />
                </div>
              </div>
            </div>

            <div className="grid col-span-12 md:col-span-6">
              <div className="card bg-base-300 rounded-box">
                <div className="card-body">

                  <div className="flex w-full">

                    <div
                      className="radial-progress bg-primary text-primary-content border-primary border-4"
                      // @ts-expect-error ---value is used to state progress bar
                      style={{ '--value': fundraisingInfo.totalRaisedPercentageOfFundraisingTarget }}
                      role="progressbar"
                    >
                      {fundraisingInfo.totalRaisedPercentageOfFundraisingTarget}
                      %
                    </div>

                    <div className="divider divider-horizontal" />

                    <div className="stats shadow">
                      <div className="stat">
                        <div className="stat-title">Total Raised</div>
                        <div className="stat-value">
                          £
                          {fundraisingInfo.totalRaised}
                        </div>
                        <div className="stat-desc">
                          of £
                          {fundraisingInfo.fundraisingTarget}
                          {' '}
                          target
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
            <div className="grid col-span-12 md:col-span-6">
              <div className="card bg-base-300 rounded-box">
                <div className="card-body">

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla rhoncus mauris volutpat, elementum libero nec, venenatis metus.
                    Curabitur ullamcorper purus ut libero sollicitudin, a blandit odio tincidunt.
                    Curabitur porta magna est, sed luctus magna pellentesque ac. Sed in nisi magna.
                  </p>

                </div>
              </div>
            </div>

            <RecentDonations donations={donations} />
            <RecentActivities
              stravaActivities={stravaActivities!}
              stravaProfileUrl={stravaProfileUrl!}
            />

            <div className="grid col-span-12">
              <Footer />
            </div>

          </div>
        </div>
      </main>
      <footer />
    </div>
  );
}
