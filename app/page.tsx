import DonationCard from "./components/DonationCard";
import Header from "./components/Header"

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="grid col-span-9">
              <div className="card bg-base-300 rounded-box place-items-center">
                <div className="card-body items-center text-center">
                  <img src="/image.png" />
                </div>
              </div>
            </div>
            <div className="grid col-span-3">
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
              <div className="card bg-base-300 rounded-box place-items-center">
                <div className="card-body items-center">

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus mauris volutpat, elementum libero nec, venenatis metus. Curabitur ullamcorper purus ut libero sollicitudin, a blandit odio tincidunt. Curabitur porta magna est, sed luctus magna pellentesque ac. Sed in nisi magna. Sed dapibus, sem pellentesque finibus sollicitudin, metus nulla sodales justo, sed gravida quam dolor quis justo. Integer vel porta lacus. Integer et sollicitudin velit.
                  </p>

                </div>
              </div>
            </div>
            <div className="grid col-span-12">
              <div className="divider">Recent Donations</div>
            </div>

            <div className="grid col-span-4">
              <DonationCard />
            </div>
            <div className="grid col-span-4">
              <DonationCard />
            </div>
            <div className="grid col-span-4">
              <DonationCard />
            </div>
            <div className="grid col-span-4">
              <DonationCard />
            </div>
            <div className="grid col-span-4">
              <DonationCard />
            </div>
            <div className="grid col-span-4">
              <DonationCard />
            </div>
          </div>
        </div>
      </main >
      <footer>

      </footer>
    </div >
  );
}
