---
Title: Raptor DB Data Dictionary 
Date: 2025-10-13
---
# Raptor DB - Data Dictionary and Description
Purpose, use, and fields for the ArcGIS Raptor Monitoring Database.
## Introduction

The purpose of this database is to record new and historic raptor nests on the SJNF and to collect reoccurring monitoring data at individual nest sites. Raptors are protected in the SJNF Forest Plan due to the sensitivity of these birds to disturbance during the nesting season and the decline in population numbers. Most raptor species have specific nest habitat requirements and high site fidelity shared making them highly impacted by changes in forest structure. Nests tend to occur in dense stands making nesting habitat vulnerable to management activities such as timber sales and prescribed burns.

Nest occurrence and monitoring data will be used to help minimize disruption from forest projects and ensure species protection. This database will be used to collect both opportunistic nest observations (nests found coincidentally) and nests located through formal raptor surveys of project areas. In addition to nest coordinates, observers should attempt to record species, nest condition, and nest activity. 

Establishing nest locations allows for seasonal buffer zones to be put in place to improve chances of reproductive success in areas with high disturbance. Knowing the species of raptor present in a territory or nest area is important for determining the protections needed and the condition of the nest may also be indicative of whether it is an active nest. Furthermore, the activity of raptors in and around the nest site is important for establishing whether the nest is occupied and active. 

New nests should be added as a point feature along with associated information about species, habitat and nest details. Point should be placed as close to the actual nest location as possible and manually adjusted if nest is inaccessible. A photo of the nest area with the nest location circled should be added to the nest point. Nests should be named based on location and species followed by a number (ex: Fosset Gulch Coopers 02). On ***both*** the initial visit and each subsequent visit to a nest, data will be recorded by selecting the nest point, and adding a data form under related data.   

## Details
Name of Map: RaptorDB Draft V2  
### Nest Point Fields:
1. Nest Name   
    * Description: Nest names should consist of the location name followed by the species (or “unknown”) followed by a number. For example “Dry Fork Falcon 03”
2.	Species
    * Description: If adults or young are present, select the species associated with the nest. 
    * Options:
        * American Kestrel
        * Bald Eagle 
        * Barn Owl
        * Burrowing Owl
        * Coopers Hawk
        * Eastern Screech-owl
        * Ferruginous Hawk
        * Flammulated Owl
        * Golden Eagle
        * Great-horned Owl
        * Long-eared Owl
        * Northern Goshawk
        * Northern Harrier 
        * Northern Pygmy-Owl
        * Northern Saw-whet Owl
        * Osprey
        * Peregrine Falcon
        * Prairie Falcon
        * Red-tailed Hawk
        * Sharp-shinned Hawk
        * Spotted Owl
        * Swainson’s Hawk
        * Turkey Vulture
        * Western Screech-Owl
        * Non-Raptor
        * Unknown Raptor
3.	Substrate
    * Description: Substrate type that the nest is built on.
    * Options:
        * Live tree, including dormant
        * Man-made nesting platform
        * Rock cliff
        * Soil bluff
        * Natural snag
        * Other – describe in comments
4.	Nest Exposure
    * Description: Mainly applicable to nests on cliffs that are only partially exposed laterally. Typical tree nests should be listed as all exposures.
    * Options
        * North: 337.5-22.5 degrees
        * Northeast: 22.5-67.5 degrees
        * East: 67.5-112.5 degrees
        * Southeast: 112.5-157.5 degrees
        * South: 157.5-202.5 degrees
        * Southwest: 202.5-247.5 degrees
        * West: 247.5-292.5 degrees
        * Northwest: 292.5-337.5 degrees
        * All Exposures
        * Unknown
5.	Habitat
    * Description: Select the predominant habitat type surrounding the nest. 
    * Options
        * Agriculture
        * Aspen
        * Cottonwood
        * Gamble Oak – Mixed Montane Shrubland
        * Native Grassland
        * Non-Native Grassland
        * Pinyon-Juniper
        * Ponderosa Pine
        * Riparian
        * Sagebrush
        * Salt Desert Shrub
        * Spruce-Fir
        * Other – describe in comments
6.	Comments
    * Include any relevant observations relating to species, nest details, habitat, behavior, etc..
7.	Monitor
    * Description: Primarily for use by the Wildlife Shop. If the there are signs of activity and the nest is in a project area, the nest should be monitored. If no activity or nest is not in an area of concern monitoring may not be a priority.
    * Options
        * Yes
        * No
8.	CPW Site Identifier
    * Description: For later use by the Wildlife Shop. Leave blank.
9.	Photo   
    * Description: Attach a photo of the nest site and circle the nest location (must be done in photos then attached). Include surrounding habitat and notable landmarks in the photo if possible.

### Associated Survey Form Fields:
1.	Survey Type 
    * Description: All nest surveys should be categorized as spring survey. Roost surveys in non-breeding season are winter surveys
    * Options:
        * Winter survey
        * Spring survey 
2.	Begin Observation Time 
    * Description: 24h time with no punctuation. Example “1445”.
3.	End Observation Time 
    * Description: 24h time with no punctuation. Example “1525”.
4.	Survey Date 
5.	Species
    * Description: If adults or young are present, select the species associated with the nest. 
    * Options:
        * American Kestrel
        * Bald Eagle 
        * Barn Owl
        * Burrowing Owl
        * Coopers Hawk
        * Eastern Screech-owl
        * Ferruginous Hawk
        * Flammulated Owl
        * Golden Eagle
        * Great-horned Owl
        * Long-eared Owl
        * Northern Goshawk
        * Northern Harrier 
        * Northern Pygmy-Owl
        * Northern Saw-whet Owl
        * Osprey
        * Peregrine Falcon
        * Prairie Falcon
        * Red-tailed Hawk
        * Sharp-shinned Hawk
        * Spotted Owl
        * Swainson’s Hawk
        * Turkey Vulture
        * Western Screech-Owl
        * Non-Raptor
        * Unknown Raptor
6.	Activity
    * Description: Note if there are any indications of raptors using a nest to help determine weather a nest is occupied. Attempt to find a vantage point that allows for viewing of eggs or young in nest but if this is not possible, select not able to determine sign. Recent nest maintenance may consist of new material added as suggested by lack of weathering and wear of the nest structure.
    * Options:
        * No sign 
        * Not able to determine 
        * No sign but whitewash present 
        * Unable to locate nest
        * Adults, young, or eggs present 
        * Adults or young nearby
        * Recent nest maintenance observed, but no birds present
7.	Nest Condition
    * Description: The nest condition should be based on the quality and age of the nest structure (how sturdy, is there a distinct nest cup, age of material, green material present, etc.) If occupied, likely good condition. 
    * Options:
        * Poor-Old material but degrading 
        * Fair-Old material 
        * Good-New and old nest material 
        * Unknown 
        * Destroyed
        * Unable to locate nest
8.	Number of Adults 
    * Description:
9.	Number of Young
    * Description:
10.	Survey Comments 
    * Description

test 1