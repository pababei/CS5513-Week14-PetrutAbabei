import got from "got";

export function dataUrls() {
  const baseUrl =
    "https://dev-cs5513-week11-petrutababei.pantheonsite.io/wp-json/twentytwentythree-child/v1/";
  const contactDataUrl = baseUrl + "contacts";
  const serviceDataUrl = baseUrl + "services";
  const resourceDataUrl = baseUrl + "resources";
  return {
    contactDataUrl: contactDataUrl,
    serviceDataUrl: serviceDataUrl,
    resourceDataUrl: resourceDataUrl,
  };
}

async function getData(url) {
  let jsonString;
  try {
    jsonString = await got(url);
  } catch (error) {
    jsonString.body = [];
    console.log(error);
  }
  const jsonObj = JSON.parse(jsonString.body);
  return jsonObj;
}

export async function getIds(url) {
  const jsonObj = await getData(url);

  return jsonObj.map(function (item) {
    return {
      params: { id: item.ID.toString() },
    };
  });
}

export async function getSortedList(url) {
  const jsonObj = await getData(url);

  jsonObj.sort(function (a, b) {
    return a.post_title.localeCompare(b.post_title);
  });

  return jsonObj.map(function (item) {
    return {
      post_id: item.ID.toString(),
      post_title: item.post_title,
      post_content: item.post_content,
      acf_fields: {
        first_name: item.acf_fields.first_name
          ? item.acf_fields.first_name
          : "",
        last_name: item.acf_fields.first_name
          ? item.acf_fields.first_name.replaceAll("~", ",")
          : "",
        email: item.acf_fields.email ? item.acf_fields.email : "",
        benefits: item.acf_fields.benefits
          ? item.acf_fields.benefits.replaceAll("~", ",")
          : "",
        pricing: item.acf_fields.pricing
          ? item.acf_fields.pricing.replaceAll("~", ",")
          : "",
        format: item.acf_fields.format
          ? item.acf_fields.format.replaceAll("~", ",")
          : "",
        timeframe: item.acf_fields.timeframe
          ? item.acf_fields.timeframe.replaceAll("~", ",")
          : "",
        prerequisites: item.acf_fields.prerequisites
          ? item.acf_fields.prerequisites.replaceAll("~", ",")
          : "",
        image_link: item.acf_fields.image_link
          ? "https://" + item.acf_fields.image_link.replaceAll("~", ",")
          : "",
      },
    };
  });
}

export async function getItemData(id, url) {
  const jsonObj = await getData(url);

  const objMatch = jsonObj.filter((obj) => {
    return obj.ID.toString() === id;
  });

  let objReturned;

  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }

  return {
    post_id: objReturned.ID.toString(),
    post_title: objReturned.post_title,
    post_content: objReturned.post_content,
    acf_fields: {
      first_name: objReturned.acf_fields.first_name
        ? objReturned.acf_fields.first_name.replaceAll("~", ",")
        : "",
      last_name: objReturned.acf_fields.last_name
        ? objReturned.acf_fields.last_name.replaceAll("~", ",")
        : "",
      email: objReturned.acf_fields.email ? objReturned.acf_fields.email : "",
      benefits: objReturned.acf_fields.benefits
        ? objReturned.acf_fields.benefits.replaceAll("~", ",")
        : "",
      pricing: objReturned.acf_fields.pricing
        ? objReturned.acf_fields.pricing.replaceAll("~", ",")
        : "",
      format: objReturned.acf_fields.format
        ? objReturned.acf_fields.format.replaceAll("~", ",")
        : "",
      timeframe: objReturned.acf_fields.timeframe
        ? objReturned.acf_fields.timeframe.replaceAll("~", ",")
        : "",
      prerequisites: objReturned.acf_fields.prerequisites
        ? objReturned.acf_fields.prerequisites.replaceAll("~", ",")
        : "",
      image_link: objReturned.acf_fields.image_link
        ? "https://" + objReturned.acf_fields.image_link.replaceAll("~", ",")
        : "",
    },
  };
}
