import { rest } from "msw";

export const handlers = [
  rest.get("https://randomuser.me/api/", (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            gender: "male",
            name: { title: "Mr", first: "Emil", last: "Halla" },
            location: {
              street: { number: 8784, name: "Pispalan Valtatie" },
              city: "Siikainen",
              state: "Uusimaa",
              country: "Finland",
              postcode: 66240,
              coordinates: { latitude: "-5.5372", longitude: "-34.3305" },
              timezone: { offset: "-3:30", description: "Newfoundland" },
            },
            email: "emil.halla@example.com",
            login: {
              uuid: "415e9ce9-9f3c-47bd-b823-4fba56b915af",
              username: "blackduck345",
              password: "luan",
              salt: "J0nWCT1n",
              md5: "16a97d4fad2db1dae1964f68773f4a29",
              sha1: "5c9989b2e25bcfeb38452ee2c1d93f2548bbfc91",
              sha256:
                "b8c1eb49f27df1f8e60b55fc00080e1864b1f7258ea61d5d154ff04715fcda9a",
            },
            dob: { date: "1998-05-01T07:47:53.063Z", age: 24 },
            registered: { date: "2014-09-18T18:06:48.353Z", age: 8 },
            phone: "04-376-036",
            cell: "049-494-44-36",
            id: { name: "HETU", value: "NaNNA431undefined" },
            picture: {
              large: "https://randomuser.me/api/portraits/men/68.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/68.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/68.jpg",
            },
            nat: "FI",
          },
        ],
        info: { seed: "23977c2398a3356f", results: 1, page: 1, version: "1.3" },
      })
    );
  }),
];
