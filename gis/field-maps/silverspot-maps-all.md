---
title: Silverspot Butterfly Field Maps Applications
date: 2026-06-02
---

# {{ $frontmatter.title }}

Last updated: {{ new Date($frontmatter.date).toLocaleDateString() }}

_Speyeria nokomis nokomis_ is a large species of fritillary butterfly native to Utah, Colorado, and New Mexico.

Northern bog violet (_Viola nephrophylla_) is the only known larval host plant for the silverspot.

<figure>
    <img src="https://media01.symbiota.org/media/h_seinet/seinet/Violaceae/photos/Viola-nephrophylla-P-web-.jpg"
         alt="Flowering *Viola nephrophylla*">
    <figcaption>Viola nephrophylla. Source: SEINet. Photo: Max Licher (https://swbiodiversity.org/seinet/imagelib/imgdetails.php?mediaid=233068).</figcaption>
</figure>

Adult _S. n. nokomis_ feed on a variety of nectar sources including thistles, horsemint, milkweed, and other flowering forbs.

Silverspot butterflies are one of the larger fritillary species, with a wingspan of up to 3.1 inches. Males have a bright orange topside with a brown-toned orange underside. Adult females are dark brown on top, with cream patches on the outer rim of their wings. The underside of their wings is more variable, with an orange topwing and cream to brown hindwing. Other sexually dimorphic fritillaries on our district can resemble the coloration of silverspot. The female great spangled fritillary has a topside which appears very similar to female silverspot, but the undersides differ significantly. It is valuable, for this reason, to obtain images (or video) of a butterfly's topside and underside during surveys.

![Silverspot butterfly visual guide](https://static1.1.sqspcdn.com/static/f/294699/28255962/1581636039703/S_n_nr_nokomis_series1_600w.jpg?token=BK4dVOTYG3%2Bm2TcfK7pZXttqWYA%3D "Silverspot Male and Female")

For more information see the [_Speyeria nokomis nokomis_ Species Status Assessment Report](https://www.fws.gov/sites/default/files/documents/20210211%20Final%20S.%20n.%20nokomis%20SSA%20Version%201_508.pdf)

## Columbine RD Silverspot Maps

- [Silverspot Habitat Inventory](https://usfs.maps.arcgis.com/home/item.html?id=86ae8d7159f64f618a561d04eaed3ad5) - This dataset is used by all employees on the San Juan to record areas that have searched for bog violet. It is not an authoritative bog violet inventory database. Rather it is a search effort database that needs to be verified biologist.

- [USFS_R2_SanJuan_Silverspot_Survey_v2](https://usfs.maps.arcgis.com/home/item.html?id=04c51b0b84854a388826f516f1a30169) - Has a polygon and line feature. The polygon feature is used for verified patches of bog violet.

- [Silverspot Butterfly Surveys](https://usfs.maps.arcgis.com/home/item.html?id=368a446ab1d540fbb2e865f27575dfc9) Currently needs updating, but will be used for official FWS butterfly surveys.

- (**NEW**) [Silverspot/Bog Violet All Surveys](https://usfs.maps.arcgis.com/home/item.html?id=7933f5ededd54788bb28211b2c46313c) - This is a combination of the above layers on one map. This map is intended to house all silverspot/bog violet inventory and monitoring layers. It houses initial presence absence surveys for bog violet (in another map this layer is shared with non-wildlife NF staff), official bog violet patches, and silverspot surveys. This is intended for Official wildlife use only on the San Juan NF and should not be shared with other non-wildlife staff.

### Silverspot Habitat Inventory Map

We use this survey to document suitable silverspot butterfly habitat. The purpose of this collection effort is to document areas surveyed for bog violet on the SJNF. Bog violet is the only known larval host plant for the silverspot butterfly (_Speyeria nokomis nokomis_). Areas to survey are areas that are wet year-round and are under 9,300 feet in elevation (silverspot are currently only known to occur up to 8,300 feet, but an individual was detected at 9,300 feet). Negative detections are as important as positive ones, though we don't expect you to document everything you do, only areas that look like they could be habitat or are mapped as wetlands in the base map. We are particularly interested in areas that could be impacted by projects you are conducting.

Please record and submit a line feature along suitable habitat and include images of wetland and bog violet. Be sure to include an image of the spur of the plant (if flowers present) so ID can be verified.

#### Data Dictionary and Description

**Name of Map**: Silverspot Habitat Inventory - SJNF

**Fields:**

1. Name of Surveyor
2. Date/Time Survey Conducted
   - Description: This field will generate automatically. If recording information for a previously conducted survey, please manually fill in date.
3. Reason for Survey
   - Description: Please look at the base map, if there is a polygon representing a wetland or other modeled habitat, please select "Modeled", if this is for a project or project planning, please select "Project", and if you just happened upon a wetland please select "Opportunistic".

   - Options:
     - Opportunistic - Happened upon the habitat and decided to record an inventory.
     - Modeled - Habitat was identified in wetland, spring, or silverspot modeled GIS layers.
     - Project - Survey is associated with potential (not modeled) habitat for a project. If the habitat is modeled but within a project, please select "Modeled".

4. Type of Habitat
   - Description:
   - Options:
     - Spring or Seep - Water source originated from a spring
     - Lotic - Associated with the edge of a river or stream.
     - Lentic - Associated with the edge of a pond or lake.
     - Fen - Associated with a fen. Fens are peat-forming wetlands that rely on groundwater.
5. Persistant wet areas occur at or nearby survey area?
   - Description: This helps determine how reliable bog violet surveys are.
   - Options:
     - No - Persistent wet areas are not visible from the survey area.
     - Yes - Persistent wet areas are within 20 m from the survey locations
     - Yes - Persistent wet areas are visible from survey area but greater than 20m from survey site.
6. Do you think this is silverspot habitat?
   - Description: Not all bog violet locations are silverspot habitat. We don't have a ton of information on what bog violet patches make good silverspot habitat at this time, so there should be many "No Value" or "Don't Know" answers to this.
   - Options:
     - No value
     - Yes - I do think this is silverspot habitat.
     - No - I do NOT think this is silverspot habitat.
     - Don't Know.
7. Comments
8. Bog Violet Present (Required)
   - Description: This is the most important field in the survey. If you have recorded a long line that is a survey and the majority of the line does not have bog violet, please start a new line where the bog violet is.
   - Options:
     - Yes
     - No
9. Is an official silverspot Bog Violet Survey Required? (For wildlife staff only.)
   - Yes: We should follow up and map bog violet patches and do a survey.
   - No: We should not follow up with an official bog violet patch survey.
10. Was an offical bog violet Survey Completed? (For wildlife staff only.)
    - Yes
    - No

### USFS_R2_SanJuan_Silverspot_Survey_v2

We use this survey to record northern bog violet presence and patch boundaries on the Columbine RD. The primary purpose of this database is to identify suitable silverspot habitat and to determine whether an official silverspot butterfly survey is necessary. When you come across potential habitat, please first record a line survey in the Silverspot Habitat Inventory database. Then, if you have time, trace polygons in this survey or return to the site at a later date to do so.

Please record and submit polygons illustrating the boundaries of bog violet patches. Attach images of bog violet for ID confirmation, when possible. Please include the spur of the plant in attached images if the plant is blooming. If not flowering, please be sure to include images of the stem shoowing whether the plant is acaulescent or caulescent.

#### Data Dictionary and Description

1.  Name of Surveyer
2.  Reason for Survey
    - Modeled - Habitat was identified in wetland,, spring, or silverspot modeled GIS layers.

    - Oppotunistic - Happened upon the habitat and decided to record an assessment.

    - Project - Survey is associated with potential (not modeled) habitat for a project. If the habitat is modeled but within a project still, please select the "Modeled" option.

3.  Type of Habitat
    - Spring or Seep - Water source originated from a spring
    - Lotic - Associated with the edge of a river or streep
    - Lentic - Associated with the edge of a pond or lake.
    - Fen - Associated with a fen.

4.  Persistent wet areas occur at or nearby survey area?
    - No - Persistent wet areas are not visible from the survey area.
    - Yes - Persistent wet areas are within 100m from the survey locations.
    - Yes - Persistent wet areas are visible from survey area but are greater than 100m from survey site.

5.  Do you think this is habitat?
    - Description: If there are wet areas and bog violet present, please select yes.
6.  Comments
7.  Bog violet present?
    - Description: Please identify to the best of your ability. Attach extra images if unsure of violet species.
8.  Is an official silverspot/bog violet survey required?
    - Description: To be completed by wildlife biologist.
9.  Was an official bog violet survey completed?
    - Description: To be completed by wildlife biologist.
10. Date Inventoried
    - Description: This field will generate automatically. If recording information for a previously conducted survey, please manually fill in date.

### Silverspot Butterfly Surveys

This database is used to collect official silverspot surveys on the SJNF. Three surveys are completed in each series, typically before a project is completed on habitat that has been deemed suitable for silverspot based on the Silverspot Habitat Inventory and USFS R2 SanJuan Silverspot Survey v2. This survey can only be completed from August to the second week of September, when _S. nokomis_ is in its adult stage, so it is important to time the three surveys accordingly.

Please attach images of wetland and butterflies observed. If fritillary butterflies (especially silverspot) are present, please take multiple images for identification purposes.

#### Data Dictionary and Description

1. Survey Location
2. Survey in series

   a. Description: Which survey in the series does this point belong to? Sites are surveyed three times per series.

3. Survey Year
4. Date and Time
5. Time spent at survey point (Depracated)
6. TIme spent at survey point (minutes)
7. Weather Conditions
   - Clear/Sunny
   - Overcast
   - Windy
   - Rainy

8. Flowers in Field of View
   - Description: None = No flowers visible. Sparse = A few isolated flowers or small patches. Can count the number of flowers in 10 seconds or less. Abundant = Many flowers, Need more than 10 seconds to count all flowers in FOV.

   - Options
     - None

     - Sparse

     - Abundant

9. Canopy Cover
   - Description: Open = No branches overhead. Full sun exposure. Partially closed = A few branches overhead. Ground exposed to sun in some areas, shaded in others. Closed = Branches of trees touching overhead, most of the ground shaded by overstory

   - Options:
     - Open

     - Partially Closed

     - Closed

10. Butterflies Observed
    - Description: Were butterflies of any type observed?

11. Silverspot Observed
    - Description: Were any silverspot butterflies observed? (Attach images)

12. Comments

### Silverspot/Bog Violet All Surveys

This map includes all the layers described above in one map.

