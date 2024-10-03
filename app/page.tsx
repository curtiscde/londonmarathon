import ActivityCard from "./components/ActivityCard";
import DonationCard from "./components/DonationCard";
import Header from "./components/Header"
import { getAuthData } from "./getAuthData";
import { StravaActivities } from "./stravaActivities/StravaActivities";

export default async function Page() {
  const oauth = await getAuthData(process.env.STRAVA_REFRESH_TOKEN as string)

  await StravaActivities.loadActivities(oauth.access_token)
  const { activities } = StravaActivities

  return (
    <div>
      <Header />
      <main>


        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4">

            <div className="grid col-span-12">
              <div className="card lg:card-side bg-base-300">
                <figure><img
                  src="https://placehold.co/600x400" /></figure>
                <div className="card-body">

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus mauris volutpat, elementum libero nec, venenatis metus. Curabitur ullamcorper purus ut libero sollicitudin, a blandit odio tincidunt. Curabitur porta magna est, sed luctus magna pellentesque ac. Sed in nisi magna. Sed dapibus, sem pellentesque finibus sollicitudin, metus nulla sodales justo, sed gravida quam dolor quis justo. Integer vel porta lacus. Integer et sollicitudin velit.
                  </p>

                </div>
              </div>
            </div>

            <div className="grid col-span-12 md:col-span-9">
              <div className="card bg-base-300 rounded-box place-items-center">
                <div className="card-body items-center text-center">
                  <img src="/image.png" />
                </div>
              </div>
            </div>
            <div className="grid col-span-12 md:col-span-3">
              <div className="card bg-base-300 rounded-box place-items-center">
                <div className="card-body items-center text-center">


                  <div
                    className="radial-progress bg-primary text-primary-content border-primary border-4"
                    style={{ "--value": 70 }}
                    role="progressbar">
                    70%
                  </div>

                </div>
              </div>
            </div>

            <div className="grid col-span-12">
              <div className="divider">Recent Donations</div>
            </div>

            <div className="grid col-span-12 md:col-span-4">
              <DonationCard />
            </div>
            <div className="grid col-span-12 md:col-span-4">
              <DonationCard />
            </div>
            <div className="grid col-span-12 md:col-span-4">
              <DonationCard />
            </div>
            <div className="grid col-span-12 md:col-span-4">
              <DonationCard />
            </div>
            <div className="grid col-span-12 md:col-span-4">
              <DonationCard />
            </div>
            <div className="grid col-span-12 md:col-span-4">
              <DonationCard />
            </div>

            <div className="grid col-span-12 place-items-center">
              <button className="btn btn-wide">Load More Donations</button>
            </div>

            <div className="grid col-span-12">
              <div className="divider">Recent Activities</div>
            </div>

            {activities.map(activity => (
              <div key={activity.id} className="grid col-span-12 md:col-span-4">
                <ActivityCard activity={activity} />
              </div>
            ))}

            <div className="grid col-span-12 place-items-center">
              <button className="btn btn-wide">Load More Activities</button>
            </div>

            <div className="grid col-span-12">
              <div className="divider"></div>
            </div>

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
                  <h6 className="footer-title">Baz</h6>
                  <a className="link link-hover" target="_blank" href="https://www.tcslondonmarathon.com">TCS London Marathon</a>
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
