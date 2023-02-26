import { describe, expect, test, vi } from 'vitest';
import getShowsByWord from "@/api/getShowsByWord";
import axios from "axios";

vi.mock("axios");

describe("getting Shows from the TVMaze backend by search word", () => {

  test("Making a GET request passing as parameter a search word to fetch shows", async () => {
    const showsMock = [{
      arrayIndex: 0,
      id: 1657,
      url: "https://www.thetvdb.com/banners/show/1657",
      name: "Under the dome",
      type: "Scripted",
      language: "English",
      genres: ["Drama, Science-Fiction, Crime"],
      status: "Ended",
      runtime: 60,
      averageRuntime: 60,
      premiered: "2013-06-24",
      ended: "2015-09-10",
      officialSite: "http://www.cbs.com/shows/under-the-dome/",
      schedule: {
        "time": "22:00",
        "days": [
            "Thursday"
        ]
      },
      rating: 6.8,
      weight: 98,
      network: {
        "id": 2,
        "name": "CBS",
        "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
        },
        "officialSite": "https://www.cbs.com/"
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        "tvrage": 25988,
        "thetvdb": 264492,
        "imdb": "tt1553656"
      },
      image: {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
      },
      summary: "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
      updated: 1631010933,
      _links: {
        "self": {
            "href": "https://api.tvmaze.com/shows/1"
        },
        "previousepisode": {
            "href": "https://api.tvmaze.com/episodes/185054"
        }
      }
    }]
    
    axios.get.mockResolvedValue({
      data: showsMock
    });

    const shows = await getShowsByWord("test");
    expect(shows).toStrictEqual(showsMock);
  });
});