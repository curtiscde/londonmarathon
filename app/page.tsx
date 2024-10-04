import ActivityCard from "./components/ActivityCard";
import DonationCard from "./components/DonationCard";
import Header from "./components/Header"
import { JustGiving } from "./justGiving/JustGiving";
import { Strava } from "./strava";

export default async function Page() {
  await Strava.load(process.env.STRAVA_REFRESH_TOKEN as string)
  const { activities, profileUrl: stravaProfileUrl } = Strava

  await JustGiving.load()
  const { donations } = JustGiving

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

            {donations.map(donation => (
              <div key={donation.id} className="grid col-span-12 md:col-span-4">
                <DonationCard donation={donation} />
              </div>
            ))}

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
              <a className="btn btn-wide" target="_blank" href={stravaProfileUrl}>
                See More Activities
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
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
                  <h6 className="footer-title">Social</h6>
                  <a className="link link-hover" target="_blank" href={stravaProfileUrl}>Strava</a>
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
