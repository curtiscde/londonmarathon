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




                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
      <footer>

      </footer>
    </div >
  );
}
