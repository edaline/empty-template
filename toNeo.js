//TODO: Fix descriptions, dates, int_range
//Add labels to e1 - node where relationship points to

//const incoming_entry = {"id":5305517,"slug":"Mattermark-XKEJ8B6","name":"Mattermark","thumbnail":{"icon":"https://media-thumbs.golden.com/M3sx5m3eJfA2H_kNIzQTUeRA4nM=/30x30/smart/golden-storage-production.s3.amazonaws.com%2Ftopic_images%2F6dd39c7d9d6343c5a7bcd6d8fbfd373a.png","icon_retina":"https://media-thumbs.golden.com/U39_z8hhcHCna4z7CbXkpGWFFUw=/60x60/smart/golden-storage-production.s3.amazonaws.com%2Ftopic_images%2F6dd39c7d9d6343c5a7bcd6d8fbfd373a.png","small":"https://media-thumbs.golden.com/tqFIh3RgRjyrNNBeoKryYPXjIVg=/100x100/smart/golden-storage-production.s3.amazonaws.com%2Ftopic_images%2F6dd39c7d9d6343c5a7bcd6d8fbfd373a.png","small_retina":"https://media-thumbs.golden.com/5hhXyLkSWe0stYCWNWrghJW38bg=/200x200/smart/golden-storage-production.s3.amazonaws.com%2Ftopic_images%2F6dd39c7d9d6343c5a7bcd6d8fbfd373a.png","original":"https://golden-storage-production.s3.amazonaws.com/topic_images/6dd39c7d9d6343c5a7bcd6d8fbfd373a.png"},"description":{"nodes":[{"data":{},"type":"paragraph","nodes":[{"leaves":[{"text":"Mattermark is a San Francisco-based company founded by Kevin Morrill, Danielle Morrill and Andy Sparks.","marks":[],"object":"leaf"}],"object":"text"}],"isVoid":false,"object":"block"}]},"generated_description":{"nodes":[{"data":{},"type":"paragraph","nodes":[{"leaves":[{"text":"Mattermark is a company founded in 2013 by Kevin Morrill, Danielle Morrill and Andy Sparks.","marks":[],"object":"leaf"}],"object":"text"}],"isVoid":false,"object":"block"}]},"prefers_generated":false,"organization":{"id":1,"slug":"wiki","name":"wiki","visibility_type":0,"avatar":{"icon":null,"icon_retina":null,"small":null,"small_retina":null,"original":null}},"instance_of":[6,35],"version_id":34563191,"infobox":[{"name":"investor_in_company","label":"Investors","field_model":"entity","display_value":1625683,"display_url":null},{"name":"investor_in_company","label":"Investors","field_model":"entity","display_value":5712972,"display_url":null},{"name":"irs_number","label":"IRS number","field_model":"int","display_value":455072047,"display_url":null},{"name":"investor_in_company","label":"Investors","field_model":"entity","display_value":5708363,"display_url":null},{"name":"founded","label":"Founded date","field_model":"date","display_value":{"year":2013,"month":3},"display_url":null},{"name":"competitors","label":"Competitors","field_model":"entity","display_value":3934884,"display_url":null},{"name":"former_ceo","label":"Former CEO","field_model":"entity","display_value":5315951,"display_url":null},{"name":"full_address","label":"Full address","field_model":"text","display_value":"61 Moraga Way Suite 6 Orinda, CA 94563","display_url":null},{"name":"funding_round","label":"Funding rounds","field_model":"entity","display_value":5551446,"display_url":null},{"name":"investor_in_company","label":"Investors","field_model":"entity","display_value":5296101,"display_url":null},{"name":"last_funding_type","label":"Latest funding type","field_model":"entity","display_value":5407241,"display_url":null},{"name":"b2what","label":"B2X","field_model":"entity","display_value":223917,"display_url":null},{"name":"industry","label":"Industry","field_model":"entity","display_value":653183,"display_url":null},{"name":"investor_in_company","label":"Investors","field_model":"entity","display_value":7557100,"display_url":null},{"name":"investor_in_company","label":"Investors","field_model":"entity","display_value":5430089,"display_url":null},{"name":"key_people","label":"Key people","field_model":"entity","display_value":5315950,"display_url":null},{"name":"investor_in_company","label":"Investors","field_model":"entity","display_value":20,"display_url":null},{"name":"blog","label":"Blog","field_model":"url","display_value":"http://www.mattermark.com/blog","display_url":null},{"name":"twitter_url","label":"Twitter URL","field_model":"url","display_value":"https://twitter.com/Mattermark","display_url":null},{"name":"investor_in_company","label":"Investors","field_model":"entity","display_value":5396123,"display_url":null},{"name":"investor_in_company","label":"Investors","field_model":"entity","display_value":5702822,"display_url":null},{"name":"competitors","label":"Competitors","field_model":"entity","display_value":5386497,"display_url":null},{"name":"investor_in_company","label":"Investors","field_model":"entity","display_value":5435826,"display_url":null},{"name":"place_of_incorporation","label":"Place of incorporation","field_model":"location","display_value":3749,"display_url":null},{"name":"facebook_url","label":"Facebook URL","field_model":"url","display_value":"https://www.facebook.com/mattermark","display_url":null},{"name":"linkedin_url","label":"LinkedIn URL","field_model":"url","display_value":"https://www.linkedin.com/company/mattermark","display_url":null},{"name":"total_funding_usd","label":"Total funding amount (USD)","field_model":"int","display_value":30300000,"display_url":null},{"name":"funding_round","label":"Funding rounds","field_model":"entity","display_value":7416091,"display_url":null},{"name":"industry","label":"Industry","field_model":"entity","display_value":93567,"display_url":null},{"name":"industry","label":"Industry","field_model":"entity","display_value":194132,"display_url":null},{"name":"investor_in_company","label":"Investors","field_model":"entity","display_value":5314260,"display_url":null},{"name":"investor_in_company","label":"Investors","field_model":"entity","display_value":5434671,"display_url":null},{"name":"competitors","label":"Competitors","field_model":"entity","display_value":5305556,"display_url":null},{"name":"competitors","label":"Competitors","field_model":"entity","display_value":6441137,"display_url":null},{"name":"investor_in_company","label":"Investors","field_model":"entity","display_value":5437288,"display_url":null},{"name":"competitors","label":"Competitors","field_model":"entity","display_value":5320393,"display_url":null},{"name":"phone_number","label":"Phone number","field_model":"text","display_value":"425-698-7497","display_url":null},{"name":"competitors","label":"Competitors","field_model":"entity","display_value":5309895,"display_url":null}]}
const fs = require("fs")
const incoming_entries = JSON.parse(fs.readFileSync('page.json', 'utf8'))

const incoming_entry = incoming_entries.results[0]

//console.log(incoming_entry.infobox)
const {localData} = incoming_entries

//localContext and wappalyzer
//infer multiple labels from there/ think about spaces
//function to extract description depending on prefers generated
//generate node labels from instance_of:[]

//parse infobox depending on field type

// copy all url as text
// copy all numbers
// copy all strings
// take realtion and create via match to id

//
const q = (display_value) => (_.isString(display_value)) ? `"${display_value}"` : display_value

const processInfoBox = ({parent, infobox}) => infobox.flatMap(field => processInfoField({parent, field})).join("")

const processInfoField = ({parent, field}) =>
{   
    let {field_model, name, display_value} = field
    if (field_model == "location") return []
    if (field_model == "date") return []
    if (field_model == "int_range") return []
    //Or instead of whitelisting do blacklisting

    let command
    const slugify = (str) => str.replaceAll(" ", "_")

    //For entity obtain through localData needed info 
    if (field_model == "entity"){
      const {id, slug, name, instance_of} = localData[String(display_value)]
      const labels = instance_of.flatMap(num => localData[String(num)]?.name ? [localData[String(num)]?.name] : []).map(label => ":"+slugify(label)).join("")
      console.log(labels)
      console.log("field to relation", field, )  
      //Map e1 labels
      return [`MERGE (${parent})-[:${field.name}]->(e_${field.name}_${id}${labels} {id: ${id}, slug: ${q(slug)}, name: ${q(name)}})\n`]
    } 
    //
    else {
        //Fix missing parenthesis for string bug
        return [`SET ${parent}.${name} = ${q(display_value)}` + `\n`]
    }
}

const entries = [incoming_entry]

const _ = require("lodash")
const { stringify } = require("querystring")

const create_entry = async(incoming_entry) => {

    const neo4j = require('neo4j-driver')
   
    const uri = 'neo4j+s://6968900e.databases.neo4j.io';
    const user = 'neo4j';
    const password = 'jn_2JqhVoeXSdlwIw7wHB-w2wn9zs2aMHpuD1NEDtoY';
   
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
    const session = driver.session()
   
    try {
   
      // To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
      // The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
   
      const parent = `c1`
      const writeQuery = `MERGE (${parent}:Company {id: $id})\n`
                          +`SET c1.name = $name\n`
                          +`SET c1.slug = $slug\n` 
                          + processInfoBox({parent, infobox: incoming_entry.infobox})
                          + `RETURN c1`
   
                          //MERGE (p2:Person { name: $person2Name })
   
                          //MERGE (p1)-[:KNOWS]->(p2)
      // Write transactions allow the driver to handle retries and transient errors
      console.log(writeQuery)
      const picked = _.pick(incoming_entry, ["id", "slug", "name"])

      const writeResult = await session.writeTransaction(tx =>tx.run(writeQuery, picked))
   
    } catch (error) {console.error('Something went wrong: ', error)} finally {await session.close()}
    // Don't forget to close the driver connection when you're finished with it
    await driver.close() 
   }

   create_entry(incoming_entry)