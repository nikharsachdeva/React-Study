import ItemComponent from "../components/ItemComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      console.log("yes");
      resolve(true);
    };

    script.onerror = () => {
      console.log("no");
      resolve(false);
    };

    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

function App() {
  //setting a dummy product
  const product = {
    image: "https://i.ibb.co/bW2QwSv/a.jpg",
    title: "Men Loose Fit Sweatshirt",
    description:
      "Top in lightweight sweatshirt fabric made from a cotton blend with a soft brushed inside. Round, rib-trimmed neckline, dropped shoulders, long sleeves and wide ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.",
    price: 999,
  };

  const buyClickHandler = (p) => {
    displayRazorpay();
  };

  async function displayRazorpay() {
    const razorPayScript = "https://checkout.razorpay.com/v1/checkout.js";
    const res = await loadScript(razorPayScript);

    if (!res) {
      alert("Failed to load Razorpay SDK");
      return;
    }

    const data = await fetch("http://localhost:3000/payment/createOrder", {
      method: "POST",
    }).then((t) => {
      return t.json(); // Add return statement here
    });

    const amount = data.data.orderAmount;
    const currency = data.data.orderCurrency;
    const order_id = data.data.orderId;

    var options = {
      key: __DEV__ ? "rzp_test_KWpuFgoAiTnK3s" : "PRODUCTION_KEY_HERE",
      amount,
      currency,
      order_id,
      name: "Nikhar Business",
      description: "Buy me a coffee!",
      image: "https://example.com/your_logo",
      prefill: {
        name: "Prefilled Name",
        email: "prefilled.name@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Gaur City",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <>
      <div>
        <ItemComponent
          product={product}
          handler={buyClickHandler}
        ></ItemComponent>
      </div>
    </>
  );
}

export default App;
