const { request } = require("#http");
const { package } = require("#model/package");

const language = {
  portuguese: "POR",
  english: "ENG",
};

exports.trackPackage = async (track_code) => {
  return new Promise(async (resolve, reject) => {
    const data = {
      lngCode: language.portuguese,
      trackingSearch: track_code,
      userInfo: { userCode: 1 },
    };

    const response = await request(data);
    const results = response.data.shipmentSearchSingle;
    const events = [];

    results.data.map((event) => {
      if (!event._verify) {
        reject();
        return;
      }
      events.push(package(event));
    });
    resolve(events.reverse());
  });
};
