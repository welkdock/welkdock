export type Block = { type: "p"; text: string } | { type: "h2"; text: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image?: { src: string; alt: string };
  source: { name: string; url: string };
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "how-neural-networks-learn",
    title: "How neural networks learn: a clear guide to the basics",
    description:
      "A practical introduction to layers, weights, training examples and error correction—and what a trained neural network is actually doing.",
    category: "Artificial intelligence",
    date: "2026-10-17",
    image: { src: "/photos/team-working.jpg", alt: "A team collaborating around a laptop" },
    source: {
      name: "Google Machine Learning Crash Course",
      url: "https://developers.google.com/machine-learning/crash-course/neural-networks",
    },
    body: [
      {
        type: "p",
        text: "A neural network is a computer model that learns patterns from examples. It is not a tiny brain, and it does not understand a task in the human sense. Instead, it repeatedly adjusts numerical values until its outputs become more useful for a particular objective.",
      },
      {
        type: "h2",
        text: "Layers turn inputs into predictions",
      },
      {
        type: "p",
        text: "A network is made of connected units arranged in layers. The first layer receives numbers representing an input—for example, pixel values from an image. Middle layers transform those numbers, and the final layer produces an output such as a label or a probability. Each connection has a weight that influences how strongly one unit affects another.",
      },
      {
        type: "h2",
        text: "Training is a loop of prediction and correction",
      },
      {
        type: "p",
        text: "During training, the model makes a prediction for an example and compares it with the expected answer using a loss function. The loss is a numerical measure of how far the prediction is from the target. An optimisation algorithm then adjusts the weights to reduce that loss. Backpropagation efficiently calculates how each weight contributed to the error, allowing the model to make a more informed adjustment.",
      },
      {
        type: "p",
        text: "The loop repeats across many examples. With suitable data and training, the network can learn patterns that help it make predictions for examples it has not seen before. That ability is called generalisation; simply memorising the training data is not enough.",
      },
      {
        type: "h2",
        text: "Training and using a model are different stages",
      },
      {
        type: "p",
        text: "Training changes the model’s weights and can require substantial computing. Inference is what happens after training, when the model uses its fixed weights to produce an answer for new input. When an app classifies a picture or suggests text, it is typically running inference—not retraining the model on the spot.",
      },
      {
        type: "h2",
        text: "What neural networks do not guarantee",
      },
      {
        type: "p",
        text: "A network’s output depends on the examples, objective and design used to train it. A confident prediction is not automatically a correct one, and patterns in the training data can carry through to the model. Good evaluation uses data kept separate from training and checks how the model performs on the cases that matter in practice.",
      },
      {
        type: "p",
        text: "In short, neural networks learn by tuning connections to reduce prediction error. That simple idea, scaled across many layers and examples, supports a wide range of modern AI—but careful data, evaluation and human judgement still matter.",
      },
    ],
  },
  {
    slug: "what-happens-when-you-open-a-website",
    title: "What happens behind the scenes when you open a website?",
    description:
      "Follow a page request from a domain name lookup through the browser’s rendering process, and see how each step affects speed and reliability.",
    category: "Web development",
    date: "2026-10-17",
    image: { src: "/photos/developer-desk.jpg", alt: "A laptop and notebook on a developer's desk" },
    source: {
      name: "MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/How_the_Web_works",
    },
    body: [
      {
        type: "p",
        text: "Typing a web address feels instantaneous, but your browser and several internet services coordinate to turn that name into a working page. Understanding the journey makes performance, security and debugging decisions easier to explain.",
      },
      {
        type: "h2",
        text: "The browser finds the server",
      },
      {
        type: "p",
        text: "The browser first needs to find the server associated with the domain. The Domain Name System (DNS) looks up the domain and returns an IP address, much like looking up a contact before making a call. The browser can then connect to that server. For an HTTPS website, the connection also establishes encryption and verifies the site’s certificate.",
      },
      {
        type: "h2",
        text: "A request brings back the page resources",
      },
      {
        type: "p",
        text: "The browser sends an HTTP request for the page. The server responds with a status and content—often HTML—along with instructions about how the browser should handle it. The HTML may refer to additional resources such as stylesheets, scripts, fonts and images, which the browser requests as needed.",
      },
      {
        type: "h2",
        text: "The browser builds what you see",
      },
      {
        type: "p",
        text: "The browser parses the HTML into a document tree and the CSS into style rules. It combines them to determine which elements appear and how they look, calculates their positions, and paints pixels to the screen. JavaScript can add behaviour or update the page, but it can also delay rendering if it is large or blocks important work.",
      },
      {
        type: "h2",
        text: "Where performance improvements come from",
      },
      {
        type: "p",
        text: "A slow page can be caused by many small costs: a slow server response, oversized images, too many network requests, render-blocking scripts or unnecessary page work. Measuring real page behaviour helps identify the largest bottleneck. Practical improvements include compressing and sizing images, caching reusable resources, reducing unused JavaScript and keeping the initial page response efficient.",
      },
      {
        type: "p",
        text: "A website is not a single file arriving in one instant. It is a sequence of lookups, requests and browser work. A fast, dependable experience comes from designing that whole journey—not just polishing what appears at the end.",
      },
    ],
  },
  {
    slug: "mobile-app-architecture-that-scales",
    title: "Mobile app architecture: keep screens, data and decisions in balance",
    description:
      "Learn how separating the interface from application data and business rules makes mobile apps easier to test, change and maintain.",
    category: "App development",
    date: "2026-10-17",
    image: { src: "/photos/mobile-app.jpg", alt: "A person using a mobile app on a smartphone" },
    source: {
      name: "Android Developers",
      url: "https://developer.android.com/topic/architecture",
    },
    body: [
      {
        type: "p",
        text: "A mobile app can start as one screen and a few requests. As features grow, mixing interface code, network calls and business decisions makes even small changes risky. A clear architecture gives each kind of work a home without adding complexity for its own sake.",
      },
      {
        type: "h2",
        text: "Give each layer a clear responsibility",
      },
      {
        type: "p",
        text: "A common approach separates the user interface from the data layer. The interface displays the current state and sends user actions onward. The data layer retrieves and saves information through repositories or similar components. When a product has complex domain rules, a separate domain layer can hold reusable decisions that should not belong to a screen.",
      },
      {
        type: "h2",
        text: "Make the UI reflect application state",
      },
      {
        type: "p",
        text: "Rather than letting many parts of an app modify the interface independently, a screen can render from an explicit state: loading, ready, empty or failed, for example. User actions are handled by a state-owning component, which requests work from the data layer and publishes the resulting state. This makes the flow easier to follow and reduces surprising screen behaviour.",
      },
      {
        type: "h2",
        text: "Plan for real network conditions",
      },
      {
        type: "p",
        text: "Mobile connections can be slow, interrupted or unavailable. The app should communicate progress, handle errors in a recoverable way, and decide deliberately which data—if any—can be read or changed offline. The right choice depends on the product: an offline-first workflow has different needs from a simple directory app.",
      },
      {
        type: "h2",
        text: "Keep architecture proportional to the product",
      },
      {
        type: "p",
        text: "Architecture is useful when it makes changes safer and responsibilities clearer. A small app does not automatically need many modules or abstractions. Start with understandable boundaries, test important behaviour, and introduce additional layers when the domain or team genuinely benefits from them.",
      },
      {
        type: "p",
        text: "The goal is not the most elaborate architecture. It is an app where interface changes, data-source changes and business rules can evolve without forcing every other part to change with them.",
      },
    ],
  },
  {
    slug: "apis-connect-web-and-mobile-apps",
    title: "APIs explained: how websites and apps talk to services",
    description:
      "Understand requests, responses, endpoints, authentication and errors through the everyday example of an app loading your account.",
    category: "Web and app development",
    date: "2026-10-17",
    image: { src: "/photos/laptop-code.jpg", alt: "Code displayed on a laptop screen" },
    source: {
      name: "MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
    },
    body: [
      {
        type: "p",
        text: "When a mobile app shows your profile or a website loads a list of products, the interface often needs data from another service. An API defines how software can make that request and what kind of response it should expect. It is a contract between systems, not just a URL.",
      },
      {
        type: "h2",
        text: "A request asks for a specific operation",
      },
      {
        type: "p",
        text: "An API endpoint identifies a resource or operation. A client might send a GET request to retrieve a profile, or a POST request to submit a new order. The request can include headers, parameters and—when appropriate—a body containing structured data such as JSON. The server processes the request and returns a response.",
      },
      {
        type: "h2",
        text: "Responses include both data and status",
      },
      {
        type: "p",
        text: "A response usually contains a status code and may contain data. A successful response can include the requested record; an error response might indicate that the resource was not found, the caller is not authorised or the server could not complete the request. Clients should handle these outcomes explicitly instead of assuming every request succeeds.",
      },
      {
        type: "h2",
        text: "Authentication is not the same as authorisation",
      },
      {
        type: "p",
        text: "Authentication establishes who or what is making a request. Authorisation determines what that caller is allowed to do. An API needs both appropriate access controls and careful handling of credentials. Sensitive keys should not be embedded in a public app, and every request should use an encrypted connection.",
      },
      {
        type: "h2",
        text: "Design the contract for change",
      },
      {
        type: "p",
        text: "A useful API is consistent about naming, data formats, validation and errors. Documentation helps other developers use it correctly. As products evolve, changes should be introduced in a way that existing clients can handle—through compatible additions, clear deprecation periods or a deliberately versioned interface.",
      },
      {
        type: "p",
        text: "Good API design makes a product feel dependable because the website, app and server agree on how information moves. Clear contracts and thoughtful error handling make that coordination easier to build and maintain.",
      },
    ],
  },
  {
    slug: "designing-useful-ai-features",
    title: "Designing AI features people can actually rely on",
    description:
      "A product-minded guide to choosing a useful AI task, setting clear expectations, evaluating outputs and keeping people in control.",
    category: "AI product design",
    date: "2026-10-17",
    image: { src: "/photos/code-editor.jpg", alt: "A developer working at a computer" },
    source: {
      name: "OpenAI Platform — Evaluation best practices",
      url: "https://platform.openai.com/docs/guides/evaluation-best-practices",
    },
    body: [
      {
        type: "p",
        text: "An AI feature is valuable when it helps someone complete a real task—not simply because a model can be connected to an interface. The best starting point is a specific user need, a clear success measure and an honest understanding of what the system may get wrong.",
      },
      {
        type: "h2",
        text: "Start with the job, not the model",
      },
      {
        type: "p",
        text: "Identify the repetitive or information-heavy step that slows a user down. Then ask whether AI is the right tool. A fixed rule or a better search may be cheaper, faster and more predictable. AI can be a good fit when inputs vary and language or pattern recognition is central to the task.",
      },
      {
        type: "h2",
        text: "Make the feature’s limits visible",
      },
      {
        type: "p",
        text: "AI output can be incomplete, out of date or confidently wrong. Interface design should set expectations, provide useful context and make it straightforward to review, correct or reject a suggestion. For consequential decisions, keep a qualified person responsible for the final judgement.",
      },
      {
        type: "h2",
        text: "Evaluate with realistic examples",
      },
      {
        type: "p",
        text: "A few impressive demonstrations do not show how a feature performs across everyday use. Build a representative set of examples, define what a good result means, and test difficult as well as common cases. Track failures that matter to users, such as missed information, unsupported claims or an answer that is hard to act on.",
      },
      {
        type: "h2",
        text: "Protect user data and plan for operations",
      },
      {
        type: "p",
        text: "Before launch, decide what information the feature needs, where it is processed, how long it is retained and who can access it. Consider latency, service availability, usage costs and a useful fallback if the AI service is unavailable. These choices affect both user trust and the product’s long-term sustainability.",
      },
      {
        type: "p",
        text: "A dependable AI feature combines a well-chosen task, careful evaluation, thoughtful controls and ongoing monitoring. The model matters, but the surrounding product decisions determine whether people can use it with confidence.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getOtherPosts(slug: string, count = 2) {
  return posts.filter((post) => post.slug !== slug).slice(0, count);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
