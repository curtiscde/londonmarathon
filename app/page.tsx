import DonationCard from "./components/DonationCard";
import Header from "./components/Header"
import Map from "./components/Map"
import RecentActivities from "./components/RecentActivities";
import { DonationsMap } from "./donationsMap";
import { Fundraising } from "./fundraising";
import { Strava, StravaActivity } from "./strava";

export default async function Page() {
  await DonationsMap.getRouteCoords()
  const { routeCoords, totalRouteDistance } = DonationsMap

  await Fundraising.loadDonations()

  Fundraising.bindDonationMaps({ routeCoords, totalRouteDistance })

  const { fundraisingInfo, donations } = Fundraising

  let stravaActivities: StravaActivity[]
  let stravaProfileUrl: string

  if (process.env.STRAVA_REFRESH_TOKEN != null && typeof process.env.STRAVA_REFRESH_TOKEN === 'string') {
    await Strava.load(process.env.STRAVA_REFRESH_TOKEN)

    const { activities, profileUrl } = Strava

    stravaActivities = activities
    stravaProfileUrl = profileUrl
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
                  <img src="https://placehold.co/600x400" />
                </figure>
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus mauris volutpat, elementum libero nec, venenatis metus. Curabitur ullamcorper purus ut libero sollicitudin, a blandit odio tincidunt. Curabitur porta magna est, sed luctus magna pellentesque ac. Sed in nisi magna. Sed dapibus, sem pellentesque finibus sollicitudin, metus nulla sodales justo, sed gravida quam dolor quis justo. Integer vel porta lacus. Integer et sollicitudin velit.
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
                      style={{ "--value": fundraisingInfo.totalRaisedPercentageOfFundraisingTarget }}
                      role="progressbar">
                      {fundraisingInfo.totalRaisedPercentageOfFundraisingTarget}%
                    </div>

                    <div className="divider divider-horizontal"></div>

                    <div className="stats shadow">
                      <div className="stat">
                        <div className="stat-title">Total Raised</div>
                        <div className="stat-value">£{fundraisingInfo.totalRaised}</div>
                        <div className="stat-desc">of £{fundraisingInfo.fundraisingTarget} target</div>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus mauris volutpat, elementum libero nec, venenatis metus. Curabitur ullamcorper purus ut libero sollicitudin, a blandit odio tincidunt. Curabitur porta magna est, sed luctus magna pellentesque ac. Sed in nisi magna.
                  </p>

                </div>
              </div>
            </div>

            <div className="grid col-span-12">
              <div className="divider">Recent Donations</div>
            </div>

            {donations.map(donation => (
              <div key={donation.id} className="grid col-span-12 md:col-span-4">
                <DonationCard donation={donation} />
              </div>
            ))}

            <div className="grid col-span-12 place-items-center">
              <button className="btn btn-wide">Load More Donations</button>
            </div>

            <RecentActivities stravaActivities={stravaActivities!} stravaProfileUrl={stravaProfileUrl!} />

            <div className="grid col-span-12">
              <footer className="footer bg-neutral text-neutral-content p-10">
                <nav>
                  <h6 className="footer-title">Foo</h6>
                  <a className="link link-hover" target="_blank" href="https://www.tcslondonmarathon.com">TCS London Marathon</a>
                  <a className="link link-hover">Foo</a>
                  <a className="link link-hover">Bar</a>
                  <a className="link link-hover">Baz</a>
                </nav>
                <nav>
                  <h6 className="footer-title">Bar</h6>
                  <a className="link link-hover" target="_blank" href="https://www.tcslondonmarathon.com">TCS London Marathon</a>
                  <a className="link link-hover">Foo</a>
                  <a className="link link-hover">Bar</a>
                  <a className="link link-hover">Baz</a>
                </nav>
                <nav>
                  <h6 className="footer-title">Social</h6>
                  <a className="link link-hover">Foo</a>
                  <a className="link link-hover">Bar</a>
                </nav>
              </footer>
            </div>

          </div>
        </div>
      </main >
      <footer>

      </footer>
    </div>
  );
}
