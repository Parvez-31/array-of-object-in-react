import { medicines } from "./services/json/medicine.json";
const App = () => {
  // console.log(medicines.map((item) => item.name));
  return (
    <>
      <section>
        <div>
          {medicines.map((item) => {
            return (
              <div
                key={item.id}
                style={{ border: "2px solid red", marginBottom: "20px" }}
              >
                {item.available ? (
                  <section>
                    <h1>{item.name}</h1>
                    <p>"desc":---{item.description}</p>
                    <p>"price":---{item.price}</p>
                    <p>"stock":---{item.stock}</p>
                    <p>"catagory":---{item.category}</p>

                    <section style={{ border: "1px solid", margin: "10px" }}>
                      <h2>manufacturer</h2>
                      <p>{item.manufacturer.name}</p>
                      <p>{item.manufacturer.country}</p>
                      <p>{item.manufacturer.establishedYear}</p>
                    </section>
                    <section style={{ border: "1px solid", margin: "10px" }}>
                      <h2>dosage</h2>
                      <p>{item.dosage.frequency}</p>
                      <p>{item.dosage.strength}</p>
                      <p>{item.dosage.type}</p>
                    </section>

                    <section>
                      <h2>subMedicines</h2>
                      <div>
                        {item.subMedicines.map((item) => {
                          return (
                            <div
                              key={item.id}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                border: "1px solid",
                                width: "300px",
                                margin: "10px",
                              }}
                            >
                              <p>{item.name}</p>
                              <p>{item.quantity}</p>
                              <p>{item.price}</p>
                            </div>
                          );
                        })}
                      </div>
                    </section>

                    <section>
                      <h2>reviews</h2>
                      <div>
                        {item.reviews.map((item) => {
                          return (
                            <div
                              key={item.id}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                border: "1px solid",
                                width: "300px",
                                margin: "10px",
                              }}
                            >
                              <p>{item.user}</p>
                              <p>{item.comment}</p>
                              <p>{item.rating}</p>
                            </div>
                          );
                        })}
                      </div>
                    </section>

                    <section>
                      <h3>tags</h3>
                      <div>
                        {item.tags.map((item, i) => {
                          return <p key={i}>{item}</p>;
                        })}
                      </div>
                    </section>
                  </section>
                ) : (
                  <p>
                    <h1>{item.name}</h1> not available
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default App;
