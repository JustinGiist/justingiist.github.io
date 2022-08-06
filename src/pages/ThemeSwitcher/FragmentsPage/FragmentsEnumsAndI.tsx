export enum Class {
    Corsair,
    Brawler,
    Hunter,
    Alchemist,
    Runesmith,
    TearDiviner,
    Acolyte
};
export enum CorsairSubClass {
    PirateOfTheSkye = "Pirate Of The Skye",
    Operative = "Operative", 
    SongsOfTheSkye = "Songs Of The Skye"
};
export enum BrawlerSubClass {
    Technique = "Technique",
    Presence = "Presence",
    Gladiator = "Gladiator"
};
export enum HunterSubClass {
    Marksman = "Marksman",
    Woodsman = "Woodsman",
    Predator = "Predator"
};
export enum AlchemistSubClass {
    Explosives = "Explosives",
    Concoctions = "Concoctions",
    Transformations = "Transformations"
};
export enum RunesmithSubClass {
    Runescribe = "Runescribe",
    Industrial = "Industrial",
    ScrapMaster = "ScrapMaster"
};
export enum TearDivinerSubClass {
    Passion = "Passion",
    Grace = "Grace",
    Brilliance = "Brilliance"
};
export enum AcolyteSubClass {
    UnderrealmBog = "Underrealm Bog",
    MirrorOfTheNorth = "Mirror Of The North",
    BeastOfWod = "Beast Of Wod",
    TreeOfNur = "Tree Of Nur"
};
export enum ComboLevel {
    One = 1,
    Eight = 8,
    Fourteen = 14,
    Twenty = 20
};
export enum ComboName {
    AcidVial,
    AlchemicOoze,
    AnAncientCurse,
    AncientClaw,
    AnicentOrdance,
    Arena,
    ArmorBoost,
    BarbedShot,
    Barrier,
    BarrierAura,
    BattleBot,
    BattleScream,
    BeastialTransformationsEnormous,
    BeastialTransformationsLarge,
    BeastialTransformationsMedium,
    BigBomba,
    BlindingFlash,
    Blitz,
    BogBreath,
    BogClouds,
    BogOoze,
    BolasShot,
    Bolster,
    BolsterAura,
    Bombard,
    BoneArmor,
    BoneCage,
    BoneSpike,
    BulkUp,
    Bullseye,
    ChainLightning,
    ChemicalEnhancements,
    CommandWater,
    Control,
    ControlCreature,
    Counterspell,
    CreateMire,
    Crevasse,
    Dash,
    Debuff,
    DebuffMass,
    DemolitionCharge,
    DirectedBlast,
    DisarmingShot,
    DisarmingStrike,
    Doppelganger,
    DoubleStrike,
    Duel,
    Earthquake,
    ElectricWeapon,
    Elixir,
    Encase,
    Entangle,
    ExperimentalGrenade,
    Explode,
    ExplosiveRound,
    FireWeapon,
    Flamewall,
    Flare,
    FlashPowder,
    Fly,
    Fog,
    Forcefield,
    ForestWall,
    ForgeBarrier,
    Fortress,
    Freeze,
    FromTheDeep,
    FullFrontalAssault,
    GasGrenade,
    GiftOfLife,
    Hail,
    Harpoon,
    HayMakers,
    Headbutt,
    HealingBomb,
    HealingBot,
    HealingSalve,
    HerculeKick,
    IceBarrier,
    IceBeam,
    IceBomb,
    IceSpire,
    IceStorm,
    Immolation,
    Incinerate,
    JackalHyde,
    Jolt,
    KnockbackStrike,
    LeapingSmash,
    LeechVines,
    LeechingArrow,
    LegSweep,
    LevitatingKick,
    LifeSapper,
    Lightning,
    LightningRod,
    MadnessArrow,
    MagicArmorBreaker,
    MagicFist,
    MagnetStone,
    MagneticBarrier,
    Magnetize,
    MarkTarget,
    MedusaSight,
    Meld,
    Melt,
    MetalBeads,
    MetalBullets,
    MetalSpike,
    Miasma,
    Mines,
    MistWalker,
    MoltenSlag,
    MoltenWeapon,
    MoltenWeaponMass,
    Napalm,
    Net,
    OilCanister,
    Overcharge,
    ParalyzeStrike,
    Paralyzer,
    PetDistraction,
    PocketSand,
    PoisonArrow,
    PoisonDagger,
    PoisonSpitter,
    PowerArmor,
    PowerSlam,
    PredatorsSense,
    Provisions,
    QuickBandage,
    QuickReflexes,
    Quicksand,
    Redline,
    RedlineMass,
    Regenerate,
    Rend,
    ResonatingStrike,
    Roar,
    ScatterShot,
    ScorpionSting,
    ScrapCannon,
    ScrapHearth,
    ScrapLaunch,
    SeedShooters,
    SevenStrike,
    Shatter,
    ShieldSlam,
    ShieldSpike,
    ShieldThrow,
    Shrapnel,
    ShrapnelStorm,
    ShrinkGiant,
    ShrugOff, 
    SlayingArrow,
    SonicBlast,
    Spark,
    SpikeSkin,
    SplinterStones,
    Stampede,
    StaticCloud,
    StaticDischarge,
    StaticWeapon,
    StaticWeaponMass,
    Stimpak,
    Stomp,
    StoneHealing,
    StoneHealingMass,
    StoneSkin,
    Suffocate,
    Sunbeam,
    SunderingStrike,
    Sunspot,
    SupportBot,
    SylvanHealing,
    SylvanHealingMass,
    Tackle,
    Tail,
    Taunt,
    TauntMass,
    Telekinesis,
    TeleportStrike,
    Tentacle,
    Throw,
    TieDown,
    Towline,
    TreeEnt,
    TrickShot,
    Turret,
    TwinStrike,
    TwinViper,
    Undeath,
    Uppercut,
    Vinelash,
    VitalShot,
    WarCry,
    Waterwhip,
    WeldingTorch,
    Whip,
    Whirlwind,
    Wings,
};
export interface Combo {
    name: string;
    level: ComboLevel;
    description: string;
    damage: string;
    effect: string;
    subClasses: string[];
};
export const CombosMap = new Map<ComboName, Combo>([
    [ComboName.DoubleStrike, {name: 'Double Strike', level: ComboLevel.One, description: 'Strike an enemy with two furious attacks', damage: 'Weapon + 2', effect: 'Strike an enemy with two furious attacks! During the damage step, deal the damage twice, in two seperate damage steps.', subClasses: [HunterSubClass.Predator]} as Combo],
    [ComboName.Dash, {name: 'Dash', level: ComboLevel.One, description: 'Dash and strike multiple enemies', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Technique]} as Combo],
    [ComboName.TwinViper, {name: 'Twin Viper', level: ComboLevel.One, description: '', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Predator]} as Combo],
    [ComboName.PocketSand, {name: 'Pocket Sand', level: ComboLevel.One, description: 'Throw sand at your enemies eyes', damage: 'Prime + 2', effect: '', subClasses: [CorsairSubClass.PirateOfTheSkye]} as Combo],
    [ComboName.Net, {name: 'Net', level: ComboLevel.One, description: 'Toss a net to entangle your foes', damage: 'Prime + 2', effect: '', subClasses: [CorsairSubClass.PirateOfTheSkye]} as Combo],
    [ComboName.Whirlwind, {name: 'Whirlwind', level: ComboLevel.Eight, description: 'Strike all foes adjacent to you', damage: 'Prime + 2', effect: '', subClasses: [CorsairSubClass.PirateOfTheSkye]} as Combo],
    [ComboName.Harpoon, {name: 'Harpoon', level: ComboLevel.Eight, description: 'Strike your foe with a harpoon and drag them toward you', damage: 'Prime + 2', effect: '', subClasses: [CorsairSubClass.PirateOfTheSkye]} as Combo],
    [ComboName.PetDistraction, {name: 'Pet Distraction', level: ComboLevel.One, description: 'Command your pet to distract an enemy', damage: 'Prime + 2', effect: '', subClasses: [CorsairSubClass.PirateOfTheSkye]} as Combo],
    [ComboName.Bombard, {name: 'Bombard', level: ComboLevel.Twenty, description: 'Strike a foe with a cannonball', damage: 'Prime + 2', effect: '', subClasses: [CorsairSubClass.PirateOfTheSkye]} as Combo],
    [ComboName.TrickShot, {name: 'Trick Shot', level: ComboLevel.Eight, description: 'Strike a foe behind cover', damage: 'Prime + 2', effect: '', subClasses: [CorsairSubClass.PirateOfTheSkye]} as Combo],
    [ComboName.DisarmingShot, {name: 'Disarming Shot', level: ComboLevel.Eight, description: "Shoot a weapon out of an enemy's grasp", damage: 'Prime + 2', effect: '', subClasses: [CorsairSubClass.PirateOfTheSkye]} as Combo],
    [ComboName.FullFrontalAssault, {name: 'Full Frontal Assault', level: ComboLevel.Fourteen, description: 'Take a shot and charge at an enemy', damage: 'Prime + 2', effect: '', subClasses: [CorsairSubClass.PirateOfTheSkye]} as Combo],
    [ComboName.TieDown, {name: 'Tie Down', level: ComboLevel.Fourteen, description: 'Tie up a foe', damage: 'Prime + 2', effect: '', subClasses: [CorsairSubClass.PirateOfTheSkye]} as Combo],
    [ComboName.DisarmingStrike, {name: 'Disarming Strike', level: ComboLevel.One, description: "Strike a weapon out of an enemy's grasp", damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Technique]} as Combo],
    [ComboName.LevitatingKick, {name: 'Levitating Kick', level: ComboLevel.One, description: 'Kick a foe airborne, knocking them back', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Technique]} as Combo],
    [ComboName.Uppercut, {name: 'Uppercut', level: ComboLevel.One, description: 'Punch a foe airborne, stunning them', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Technique]} as Combo],
    [ComboName.LegSweep, {name: 'Leg Sweep', level: ComboLevel.Eight, description: "Knock foe's around you prone", damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Technique]} as Combo],
    [ComboName.Blitz, {name: 'Blitz', level: ComboLevel.Eight, description: 'Move swiftly at foe and strike', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Technique]} as Combo],
    [ComboName.SunderingStrike, {name: 'Sundering Strike', level: ComboLevel.Eight, description: "Render a foe's armor useless with your fist", damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Technique]} as Combo],
    [ComboName.Throw, {name: 'Throw', level: ComboLevel.Eight, description: 'Grab a foe and chuck them', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Technique]} as Combo],
    [ComboName.PowerSlam, {name: 'Power Slam', level: ComboLevel.Fourteen, description: 'Slam into a foe, knocking them back', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Technique]} as Combo],
    [ComboName.TeleportStrike, {name: 'Teleport Strike', level: ComboLevel.Fourteen, description: 'Instantly move to strike a foe', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Technique]} as Combo],
    [ComboName.SevenStrike, {name: 'Seven Strike', level: ComboLevel.Fourteen, description: 'Strike a foe seven times', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Technique]} as Combo],
    [ComboName.ResonatingStrike, {name: 'Resonating Strike', level: ComboLevel.Fourteen, description: 'Strike so swiftly that you deafen them', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Technique]} as Combo],
    [ComboName.HerculeKick, {name: 'Hercule Kick', level: ComboLevel.Twenty, description: 'A kick so hard, they may go through walls', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Technique]} as Combo],
    [ComboName.BulkUp, {name: 'Bulk Up', level: ComboLevel.One, description: 'Strengthen your ability', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Presence]} as Combo],
    [ComboName.Fortress, {name: 'Fortress', level: ComboLevel.One, description: 'Gain Defense and Armor', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Presence]} as Combo],
    [ComboName.ArmorBoost, {name: 'Armor Boost', level: ComboLevel.One, description: 'Gain Armor', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Presence]} as Combo],
    [ComboName.ShrugOff, {name: 'Shrug Off', level: ComboLevel.One, description: 'Gain a little SP', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Presence]} as Combo],
    [ComboName.MagicFist, {name: 'Magic Fist', level: ComboLevel.Eight, description: 'Your attacks deal magic damage', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Presence]} as Combo],
    [ComboName.HayMakers, {name: 'Hay Makers', level: ComboLevel.Eight, description: "Your attacks stun foe's", damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Presence]} as Combo],
    [ComboName.QuickReflexes, {name: 'Quick Reflexes', level: ComboLevel.Eight, description: 'Increase your defense', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Presence]} as Combo],
    [ComboName.MagicArmorBreaker, {name: 'Magic Armor Breaker', level: ComboLevel.Eight, description: 'Your attacks break M. Armor', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Presence]} as Combo],
    [ComboName.Taunt, {name: 'Taunt', level: ComboLevel.One, description: 'Taunt a foe into attacking you', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Gladiator]} as Combo],
    [ComboName.ShieldSlam, {name: 'Shield Slam', level: ComboLevel.One, description: 'Bash an enemy with your shield', damage: 'Prime + 2', effect: 'Bash an enemy with your shield! Contest Prime Vs End. If you win the contest, the enemy gains Stunned, Duration 2 Turns', subClasses: [BrawlerSubClass.Gladiator]} as Combo],
    [ComboName.WarCry, {name: 'War Cry', level: ComboLevel.One, description: 'Increase the attack of your allies for 2 Turns', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Gladiator]} as Combo],
    [ComboName.ShieldSpike, {name: 'Shield Spike', level: ComboLevel.One, description: 'When a foe attacks you, you deal damage back', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Gladiator]} as Combo],
    [ComboName.ShieldThrow, {name: 'Shield Throw', level: ComboLevel.Eight, description: 'Toss your shield at an enemy!', damage: 'Prime + 5', effect: 'Toss your shield at an enemy! Contest Prime Vs Agi. If you win the contest, the enemy takes damage and gains Stunned. Duration 1 Turn. If you fail the contest, they take half damage instead.', subClasses: [BrawlerSubClass.Gladiator]} as Combo],
    [ComboName.Stomp, {name: 'Stomp', level: ComboLevel.Eight, description: "Slam the ground, stunning foe's around you", damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Gladiator]} as Combo],
    [ComboName.Whip, {name: 'Whip', level: ComboLevel.Eight, description: 'Strike a foe at range', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Gladiator]} as Combo],
    [ComboName.Rend, {name: 'Rend', level: ComboLevel.Eight, description: 'Bleed a foe', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Gladiator]} as Combo],
    [ComboName.BattleScream, {name: 'Battle Scream', level: ComboLevel.Fourteen, description: "Stun foe's around you", damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Gladiator]} as Combo],
    [ComboName.TauntMass, {name: 'Taunt, Mass', level: ComboLevel.Fourteen, description: "Taunt foe's around you into attacking you", damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Gladiator]} as Combo],
    [ComboName.Duel, {name: 'Duel', level: ComboLevel.Fourteen, description: 'Force you and a foe into a duel', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Gladiator]} as Combo],
    [ComboName.LeapingSmash, {name: 'Leaping Smash', level: ComboLevel.Fourteen, description: 'Jump a smash the ground', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Gladiator]} as Combo],
    [ComboName.Arena, {name: 'Arena', level: ComboLevel.Twenty, description: 'Slam the ground, creating a rock arena', damage: 'Prime + 2', effect: '', subClasses: [BrawlerSubClass.Gladiator]} as Combo],
    [ComboName.VitalShot, {name: 'Vital Shot', level: ComboLevel.Eight, description: "Shoot a target's vitals, making them bleed", damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Marksman]} as Combo],
    [ComboName.BarbedShot, {name: 'Barbed Shot', level: ComboLevel.One, description: 'Shoot a target, hindering their movement', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Marksman]} as Combo],
    [ComboName.ExplosiveRound, {name: 'Explosive Round', level: ComboLevel.Eight, description: 'Shoot a round that explodes', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Marksman]} as Combo],
    [ComboName.Bullseye, {name: 'Bullseye', level: ComboLevel.Fourteen, description: 'A perfect shot, dealing pure damage', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Marksman]} as Combo],
    [ComboName.Mines, {name: 'Mines', level: ComboLevel.Eight, description: 'Toss out a group of expolosive mines', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Marksman]} as Combo],
    [ComboName.PoisonArrow, {name: 'Poison Arrow', level: ComboLevel.One, description: 'Shoot a foe, poisoning them', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Woodsman]} as Combo],
    [ComboName.Paralyzer, {name: 'Paralyzer', level: ComboLevel.One, description: 'Shoot a foe, paralyzing them', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Woodsman]} as Combo],
    [ComboName.QuickBandage, {name: 'QuickBandage', level: ComboLevel.One, description: 'Heal you or someone adjacent to you', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Woodsman]} as Combo],
    [ComboName.Provisions, {name: 'Provisions', level: ComboLevel.Eight, description: 'Drop a box of healing provisions', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Woodsman]} as Combo],
    [ComboName.MadnessArrow, {name: 'Madness Arrow', level: ComboLevel.Eight, description: 'Shoot a foe, making them go crazy', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Woodsman]} as Combo],
    [ComboName.LeechingArrow, {name: 'Leeching Arrow', level: ComboLevel.Eight, description: 'Shoot a foe that seeds them with leeching vines', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Woodsman]} as Combo],
    [ComboName.SlayingArrow, {name: 'Slaying Arrow', level: ComboLevel.Eight, description: 'A slaying Shot', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Woodsman]} as Combo],
    [ComboName.BolasShot, {name: 'Bolas Shot', level: ComboLevel.One, description: 'Shoot a foe, entangling them', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Woodsman]} as Combo],
    [ComboName.Tackle, {name: 'Tackle', level: ComboLevel.Fourteen, description: 'Run at an enemy, tackling them prone and grappling them', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Predator]} as Combo],
    [ComboName.MarkTarget, {name: 'Mark Target', level: ComboLevel.One, description: 'Mark a target, making them vunerable', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Predator]} as Combo],
    [ComboName.Towline, {name: 'Towline', level: ComboLevel.Eight, description: 'Strike a foe at range and then move adjacent to them', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Predator]} as Combo],
    [ComboName.PredatorsSense, {name: 'Predators Sense', level: ComboLevel.Eight, description: 'Gain the senses of a top predator', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Predator]} as Combo],
    [ComboName.TwinStrike, {name: 'Twin Strike', level: ComboLevel.One, description: '', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Predator]} as Combo],
    [ComboName.Meld, {name: 'Meld', level: ComboLevel.One, description: 'Meld metal joints together, hindering movement', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Predator]} as Combo],
    [ComboName.DirectedBlast, {name: 'Directed Blast', level: ComboLevel.One, description: 'Direct a bomb blast in a cone', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Explosives]} as Combo],
    [ComboName.ExperimentalGrenade, {name: 'Experimental Grenade', level: ComboLevel.One, description: 'An unstable grenade with a variety of concoctions', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Explosives]} as Combo],
    [ComboName.DemolitionCharge, {name: 'Demolition Charge', level: ComboLevel.Eight, description: 'A blast that sunders armor', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Explosives]} as Combo],
    [ComboName.OilCanister, {name: 'Oil Canister', level: ComboLevel.Eight, description: 'Create a large oil slick', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Explosives]} as Combo],
    [ComboName.GasGrenade, {name: 'Gas Grenade', level: ComboLevel.Eight, description: 'A grenade that releases a variety of toxins', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Explosives]} as Combo],
    [ComboName.AnicentOrdance, {name: 'Anicent Ordance', level: ComboLevel.Fourteen, description: 'An old bomb, deals Ancient damage', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Explosives]} as Combo],
    [ComboName.Shrapnel, {name: 'Shrapnel', level: ComboLevel.Fourteen, description: 'A bomb that causes bleeding', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Explosives]} as Combo],
    [ComboName.Napalm, {name: 'Napalm', level: ComboLevel.Fourteen, description: 'A bomb that releases sticky napalm', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Explosives]} as Combo],
    [ComboName.IceBomb, {name: 'Ice Bomb', level: ComboLevel.Fourteen, description: 'A bomb that can freeze', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Explosives]} as Combo],
    [ComboName.BigBomba, {name: 'Big Bomba', level: ComboLevel.Twenty, description: 'The biggest bomb', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Explosives]} as Combo],
    [ComboName.HealingSalve, {name: 'Healing Salve', level: ComboLevel.One, description: 'A concoction that heals wounds', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Concoctions]} as Combo],
    [ComboName.AcidVial, {name: 'Acid Vial', level: ComboLevel.One, description: 'Toss a vial of burning acid', damage: 'Prime + 4', effect: 'Toss a vial of burning acid at a target that breaks and destroys their armor. Contested Prime Vs Agility. If you win the contest, the enemy gains Sundered, Duration 2 Turns', subClasses: [AlchemistSubClass.Concoctions]} as Combo],
    [ComboName.Stimpak, {name: 'Stimpak', level: ComboLevel.One, description: 'A quick boost to attack and movement', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Concoctions]} as Combo],
    [ComboName.PoisonDagger, {name: 'Poison Dagger', level: ComboLevel.One, description: 'Poison your blade and slice your foe', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Concoctions]} as Combo],
    [ComboName.SonicBlast, {name: 'Sonic Blast', level: ComboLevel.Eight, description: 'A direct deafening blast', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Concoctions]} as Combo],
    [ComboName.FlashPowder, {name: 'Flash Powder', level: ComboLevel.Eight, description: 'A blinding flash of chemicals', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Concoctions]} as Combo],
    [ComboName.AlchemicOoze, {name: 'Alchemic Ooze', level: ComboLevel.Eight, description: 'Release your trusty ooze from a jar', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Concoctions]} as Combo],
    [ComboName.Encase, {name: 'Encase', level: ComboLevel.Eight, description: 'A blast that covers foes in solidified goo', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Concoctions]} as Combo],
    [ComboName.HealingBomb, {name: 'Healing Bomb', level: ComboLevel.Fourteen, description: 'A bomb that blows up, but heals your friends', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Concoctions]} as Combo],
    [ComboName.MedusaSight, {name: "Medusa Sight", level: ComboLevel.Fourteen, description: 'A blast that petrifies your foes', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Concoctions]} as Combo],
    [ComboName.LifeSapper, {name: 'Life Sapper', level: ComboLevel.Fourteen, description: 'Sap the life from a foe, for yourself', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Concoctions]} as Combo],
    [ComboName.Elixir, {name: 'Elixir', level: ComboLevel.Twenty, description: 'A perfect potion, that restores more than life', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Concoctions]} as Combo],
    [ComboName.Regenerate, {name: 'Regenerate', level: ComboLevel.One, description: 'Regenerate SP overtime', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Transformations]} as Combo],
    [ComboName.StoneSkin, {name: 'Stone Skin', level: ComboLevel.One, description: 'Gain Armor', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Transformations]} as Combo],
    [ComboName.Tentacle, {name: 'Tentacle', level: ComboLevel.Eight, description: 'Grow a tentacle', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Transformations]} as Combo],
    [ComboName.BeastialTransformationsMedium, {name: 'Beastial Transformations - Medium', level: ComboLevel.Eight, description: 'Transform into any Medium-Sized Beast', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Transformations, AcolyteSubClass.BeastOfWod]} as Combo],
    [ComboName.ChemicalEnhancements, {name: 'Chemical Enhancements', level: ComboLevel.One, description: 'Take some concoctions that enhance your body', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Transformations]} as Combo],
    [ComboName.SpikeSkin, {name: 'Spike Skin', level: ComboLevel.Eight, description: 'Your skin grows spikes', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Transformations]} as Combo],
    [ComboName.ScorpionSting, {name: 'Scorpion Sting', level: ComboLevel.One, description: 'Strike a foe with a scorpion tail', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Transformations]} as Combo],
    [ComboName.Tail, {name: 'Tail', level: ComboLevel.Eight, description: 'Grow a prehensile tail', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Transformations]} as Combo],
    [ComboName.Wings, {name: 'Wings', level: ComboLevel.Fourteen, description: 'Grow a pair a wings and fly', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Transformations]} as Combo],
    [ComboName.ShrinkGiant, {name: 'Shrink/Giant', level: ComboLevel.Fourteen, description: 'You may become a miniscule or large size', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Transformations]} as Combo],
    [ComboName.Doppelganger, {name: 'Doppelganger', level: ComboLevel.Fourteen, description: 'Make a clone of yourself', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Transformations]} as Combo],
    [ComboName.BeastialTransformationsLarge, {name: 'Beastial Transformations - Large', level: ComboLevel.Fourteen, description: 'Transform into any Large-Sized Beast', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Transformations, AcolyteSubClass.BeastOfWod]} as Combo],
    [ComboName.JackalHyde, {name: 'Jackal/Hyde', level: ComboLevel.Twenty, description: 'Transform into a gigantic brute', damage: 'Prime + 2', effect: '', subClasses: [AlchemistSubClass.Transformations]} as Combo],
    [ComboName.ParalyzeStrike, {name: 'Paralyze Strike', level: ComboLevel.One, description: 'A strike that paralyzes the target', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Runescribe]} as Combo],
    [ComboName.KnockbackStrike, {name: 'Knockback Strike', level: ComboLevel.One, description: 'A strike that knocks the target back', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Runescribe]} as Combo],
    [ComboName.FireWeapon, {name: 'Fire Weapon', level: ComboLevel.One, description: 'Your attacks now deal Fire damage', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Runescribe]} as Combo],
    [ComboName.ElectricWeapon, {name: 'Electric Weapon', level: ComboLevel.One, description: 'Your attacks now deal Electric damage', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Runescribe]} as Combo],
    [ComboName.Incinerate, {name: 'Incinerate', level: ComboLevel.Eight, description: 'A jet of flames', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Runescribe]} as Combo],
    [ComboName.MoltenWeapon, {name: 'Molten Weapon', level: ComboLevel.Eight, description: 'Your attacks now deal Fire damage & Armor Breaker', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Runescribe]} as Combo],
    [ComboName.StaticWeapon, {name: 'Static Weapon', level: ComboLevel.Eight, description: 'Your attacks now deal Electric damage & M.Armor Breaker', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Runescribe]} as Combo],
    [ComboName.ScatterShot, {name: 'Scatter Shot', level: ComboLevel.Eight, description: 'Make a shot that scatters and hits all in front of you', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Runescribe]} as Combo],
    [ComboName.MoltenWeaponMass, {name: 'Molten Weapon, Mass', level: ComboLevel.Fourteen, description: 'Allies gain Molten Weapon', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Runescribe]} as Combo],
    [ComboName.StaticWeaponMass, {name: 'Static Weapon, Mass', level: ComboLevel.Fourteen, description: 'Allies gain Static Weapon', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Runescribe]} as Combo],
    [ComboName.MoltenSlag, {name: 'Molten Slag', level: ComboLevel.Fourteen, description: 'A jet of molten slag that sunders Armor', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Runescribe]} as Combo],
    [ComboName.Overcharge, {name: 'Overcharge', level: ComboLevel.Twenty, description: 'A gigantic beam', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Runescribe]} as Combo],
    [ComboName.Jolt, {name: 'Jolt', level: ComboLevel.One, description: 'A static jolt to an adjacent foe', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Industrial]} as Combo],
    [ComboName.Magnetize, {name: 'Magnetize', level: ComboLevel.One, description: 'Magnetize a piece of metal', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Industrial]} as Combo],
    [ComboName.MagneticBarrier, {name: 'Magnetic Barrier', level: ComboLevel.One, description: 'A barrier that repels all metal objects', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Industrial]} as Combo],
    [ComboName.StaticDischarge, {name: 'Static Discharge', level: ComboLevel.Eight, description: 'You discharge stored electricity', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Industrial]} as Combo],
    [ComboName.ChainLightning, {name: 'Chain Lightning', level: ComboLevel.Eight, description: 'Strike multiple foes with a chain of electricity', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Industrial]} as Combo],
    [ComboName.MagnetStone, {name: 'Magnet Stone', level: ComboLevel.Eight, description: 'Drop a large stone that disarms or subdues foes', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Industrial]} as Combo],
    [ComboName.LightningRod, {name: 'Lightning Rod', level: ComboLevel.Eight, description: 'Strike a piece of metal with lightning', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Industrial]} as Combo],
    [ComboName.ScrapLaunch, {name: 'Scrap Launch', level: ComboLevel.Fourteen, description: 'Launch scrap or metal at a foe', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.Industrial]} as Combo],
    [ComboName.SupportBot, {name: 'Support Bot', level: ComboLevel.One, description: 'A bot that supports you', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.ScrapMaster]} as Combo],
    [ComboName.Bolster, {name: 'Bolster', level: ComboLevel.One, description: 'Target ally gains Armor', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.ScrapMaster]} as Combo],
    [ComboName.Barrier, {name: 'Barrier', level: ComboLevel.One, description: 'Target ally gains Magic Armor', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.ScrapMaster]} as Combo],
    [ComboName.HealingBot, {name: 'Healing Bot', level: ComboLevel.Eight, description: 'A bot that heals you and allies', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.ScrapMaster]} as Combo],
    [ComboName.BolsterAura, {name: 'Bolster, Aura', level: ComboLevel.Eight, description: 'All allies around you gain Armor', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.ScrapMaster]} as Combo],
    [ComboName.BarrierAura, {name: 'Barrier, Aura', level: ComboLevel.Eight, description: 'All allies around you gain Magic Armor', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.ScrapMaster]} as Combo],
    [ComboName.ForgeBarrier, {name: 'Forge Barrier', level: ComboLevel.One, description: 'Create a metal barrier', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.ScrapMaster]} as Combo],
    [ComboName.BattleBot, {name: 'Battle Bot', level: ComboLevel.Fourteen, description: 'A bot that fights with you', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.ScrapMaster]} as Combo],
    [ComboName.ScrapHearth, {name: 'Scrap Hearth', level: ComboLevel.Fourteen, description: 'Create a warm hearth out of scrap', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.ScrapMaster]} as Combo],
    [ComboName.PowerArmor, {name: 'Power Armor', level: ComboLevel.Fourteen, description: 'Scrap melds around you creating Power Armor', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.ScrapMaster]} as Combo],
    [ComboName.Turret, {name: 'Turret', level: ComboLevel.Twenty, description: 'Create a scrap firing Turret', damage: 'Prime + 2', effect: '', subClasses: [RunesmithSubClass.ScrapMaster]} as Combo],
    [ComboName.Spark, {name: 'Spark', level: ComboLevel.One, description: 'Launch a spark at a foe', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Passion]} as Combo],
    [ComboName.Entangle, {name: 'Entangle', level: ComboLevel.One, description: 'Entangle a foe, hindering their movement', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Passion]} as Combo],
    [ComboName.MetalBeads, {name: 'Metal Beads', level: ComboLevel.One, description: 'Create thousands of round metal beads', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Passion]} as Combo],
    [ComboName.MetalSpike, {name: 'Metal Spike', level: ComboLevel.One, description: 'Launch a spike at a foe', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Passion]} as Combo],
    [ComboName.MetalBullets, {name: 'Metal Bullets', level: ComboLevel.Eight, description: 'Launch several mini scrap bullets', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Passion]} as Combo],
    [ComboName.Lightning, {name: 'Lightning', level: ComboLevel.Fourteen, description: 'Strike a single target with electricity', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Passion]} as Combo],
    [ComboName.StaticCloud, {name: 'Static Cloud', level: ComboLevel.Eight, description: 'A cloud of static that stuns foes within', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Passion]} as Combo],
    [ComboName.Telekinesis, {name: 'Telekinesis', level: ComboLevel.Fourteen, description: 'Throw an object with your mind', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Passion]} as Combo],
    [ComboName.ScrapCannon, {name: 'Scrap Cannon', level: ComboLevel.Eight, description: 'Launch a ball of scrap', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Passion]} as Combo],
    [ComboName.ShrapnelStorm, {name: 'Shrapnel Storm', level: ComboLevel.Fourteen, description: 'A storm of metal, that slices and dices', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Passion]} as Combo],
    [ComboName.Debuff, {name: 'Debuff', level: ComboLevel.One, description: 'Remove any buffs on a target', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Grace]} as Combo],
    [ComboName.Redline, {name: 'Redline', level: ComboLevel.One, description: 'Increase the speed & attack of an ally', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Grace]} as Combo],
    [ComboName.Fog, {name: 'Fog', level: ComboLevel.One, description: 'Create a thick fog in an area', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Grace]} as Combo],
    [ComboName.StoneHealing, {name: 'Stone Healing', level: ComboLevel.One, description: 'Heal a target Ally', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Grace]} as Combo],
    [ComboName.Counterspell, {name: 'Counterspell', level: ComboLevel.Eight, description: 'Counter an enemy spell and cancel its effects', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Grace]} as Combo],
    [ComboName.StoneHealingMass, {name: 'Stone Healing, Mass', level: ComboLevel.Eight, description: 'Heal all Allies around you', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Grace]} as Combo],
    [ComboName.DebuffMass, {name: 'Debuff, Mass', level: ComboLevel.Eight, description: 'Remove buffs from multiple targets', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Grace]} as Combo],
    [ComboName.Fly, {name: 'Fly', level: ComboLevel.Fourteen, description: 'Levitate and move through the air', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Grace]} as Combo],
    [ComboName.RedlineMass, {name: 'Redline, Mass', level: ComboLevel.Fourteen, description: 'Increase the Speed & Attack of Allies', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Grace]} as Combo],
    [ComboName.Forcefield, {name: 'Forcefield', level: ComboLevel.Twenty, description: 'Create an impenetrable barrier', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Grace]} as Combo],
    [ComboName.Flare, {name: 'Flare', level: ComboLevel.One, description: 'Shoot a small fireball at a foe', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Brilliance]} as Combo],
    [ComboName.Explode, {name: 'Explode', level: ComboLevel.One, description: 'Make any source of fire, explode', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Brilliance]} as Combo],
    [ComboName.BlindingFlash, {name: 'Blinding Flash', level: ComboLevel.One, description: 'A flash of blinding light', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Brilliance]} as Combo],
    [ComboName.Immolation, {name: 'Immolation', level: ComboLevel.One, description: 'Radiate heat, causing burning', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Brilliance]} as Combo],
    [ComboName.Flamewall, {name: 'Flamewall', level: ComboLevel.Eight, description: 'Create a raging wall of flames', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Brilliance]} as Combo],
    [ComboName.WeldingTorch, {name: 'Welding Torch', level: ComboLevel.Eight, description: 'Shoot a sundering beam of flame', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Brilliance]} as Combo],
    [ComboName.Melt, {name: 'Melt', level: ComboLevel.Eight, description: 'Destroy a piece of armor', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Brilliance]} as Combo],
    [ComboName.Sunbeam, {name: 'Sunbeam', level: ComboLevel.Fourteen, description: 'A single target is burned and blinded', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Brilliance]} as Combo],
    [ComboName.Sunspot, {name: 'Sunspot', level: ComboLevel.Twenty, description: 'All targets in an area are burned and blinded', damage: 'Prime + 2', effect: '', subClasses: [TearDivinerSubClass.Brilliance]} as Combo],
    [ComboName.BoneArmor, {name: 'Bone Armor', level: ComboLevel.One, description: 'Gain Armor and deal damage back to attackers', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.UnderrealmBog]} as Combo],
    [ComboName.BoneSpike, {name: 'Bone Spike', level: ComboLevel.One, description: 'Launch a pointed bone spike at a foe', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.UnderrealmBog]} as Combo],
    [ComboName.BogClouds, {name: 'Bog Clouds', level: ComboLevel.One, description: 'Create a bog cloud that causes poison', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.UnderrealmBog]} as Combo],
    [ComboName.BoneCage, {name: 'Bone Cage', level: ComboLevel.Eight, description: 'Create a cage of bones that traps foes', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.UnderrealmBog]} as Combo],
    [ComboName.BogBreath, {name: 'Bog Breath', level: ComboLevel.Eight, description: 'A diseased breath that poisons', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.UnderrealmBog]} as Combo],
    [ComboName.BogOoze, {name: 'Bog Ooze', level: ComboLevel.Eight, description: 'Create a venemous Bog Ooze to fight by your side', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.UnderrealmBog]} as Combo],
    [ComboName.Miasma, {name: 'Miasma', level: ComboLevel.Eight, description: 'Create a diseased area', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.UnderrealmBog]} as Combo],
    [ComboName.Undeath, {name: 'Undeath', level: ComboLevel.Fourteen, description: 'Bring a creature back from the dead', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.UnderrealmBog]} as Combo],
    [ComboName.CreateMire, {name: 'Create Mire', level: ComboLevel.Fourteen, description: 'Create a swamp mire in an area', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.UnderrealmBog]} as Combo],
    [ComboName.AnAncientCurse, {name: 'An Ancient Curse', level: ComboLevel.Twenty, description: 'An old bog curse from the Ancient Ones', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.UnderrealmBog]} as Combo],
    [ComboName.Waterwhip, {name: 'Waterwhip', level: ComboLevel.One, description: 'Slice them with a whip made of water', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.MirrorOfTheNorth]} as Combo],
    [ComboName.IceBarrier, {name: 'Ice Barrier', level: ComboLevel.One, description: 'Create a wall made of ice', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.MirrorOfTheNorth]} as Combo],
    [ComboName.Freeze, {name: 'Freeze', level: ComboLevel.One, description: 'Freeze an enemy in place', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.MirrorOfTheNorth]} as Combo],
    [ComboName.MistWalker, {name: 'Mist Walker', level: ComboLevel.Eight, description: 'Step through water to anywhere else with water', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.MirrorOfTheNorth]} as Combo],
    [ComboName.Control, {name: 'Control', level: ComboLevel.Fourteen, description: 'Control the actions of an enemy', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.MirrorOfTheNorth]} as Combo],
    [ComboName.IceBeam, {name: 'Ice Beam', level: ComboLevel.Eight, description: 'A jet of sub-freezing ice', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.MirrorOfTheNorth]} as Combo],
    [ComboName.Hail, {name: 'Hail', level: ComboLevel.Eight, description: 'An area starts getting pelted with hail', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.MirrorOfTheNorth]} as Combo],
    [ComboName.IceSpire, {name: 'Ice Spire', level: ComboLevel.Fourteen, description: 'Create a pillar of ice', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.MirrorOfTheNorth]} as Combo],
    [ComboName.Shatter, {name: 'Shatter', level: ComboLevel.Eight, description: 'A ice ball explodes and shatters', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.MirrorOfTheNorth]} as Combo],
    [ComboName.Suffocate, {name: 'Suffocate', level: ComboLevel.Fourteen, description: 'Suffocate an enemy with water', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.MirrorOfTheNorth]} as Combo],
    [ComboName.CommandWater, {name: 'Command Water', level: ComboLevel.Eight, description: 'Bend any water source to your will', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.MirrorOfTheNorth]} as Combo],
    [ComboName.IceStorm, {name: 'Ice Storm', level: ComboLevel.Fourteen, description: 'A storm of slicing icicles', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.MirrorOfTheNorth]} as Combo],
    [ComboName.ControlCreature, {name: 'Control Creature', level: ComboLevel.Fourteen, description: 'Control the water within a creature', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.MirrorOfTheNorth]} as Combo],
    [ComboName.FromTheDeep, {name: 'From The Deep', level: ComboLevel.Twenty, description: 'An ancient creature comes from the depths below', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.MirrorOfTheNorth]} as Combo],
    [ComboName.Regenerate, {name: 'Regenerate', level: ComboLevel.One, description: 'Regenerate Stamina over time', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.BeastOfWod]} as Combo],
    [ComboName.Headbutt, {name: 'Headbutt', level: ComboLevel.One, description: 'Use your noggin to stun an enemy', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.BeastOfWod]} as Combo],
    [ComboName.Roar, {name: 'Roar', level: ComboLevel.One, description: 'Emit a loud roar that stuns foes around you', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.BeastOfWod]} as Combo],
    [ComboName.Stampede, {name: 'Stampede', level: ComboLevel.Eight, description: 'Charge through enemies, knocking them down', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.BeastOfWod]} as Combo],
    [ComboName.Wings, {name: 'Wings', level: ComboLevel.Fourteen, description: 'Sprout a pair of your own wings', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.BeastOfWod]} as Combo],
    [ComboName.AncientClaw, {name: 'Ancient Claw', level: ComboLevel.Fourteen, description: 'An technique of the Anicent Ones', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.BeastOfWod]} as Combo],
    [ComboName.BeastialTransformationsEnormous, {name: 'Beastial Transformations - Enormous', level: ComboLevel.Twenty, description: 'Transform into any beast of size Enormous', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.BeastOfWod]} as Combo],
    [ComboName.Vinelash, {name: 'Vinelash', level: ComboLevel.One, description: 'Whip a vine at a foe', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.TreeOfNur]} as Combo],
    [ComboName.SylvanHealing, {name: 'Sylvan Healing', level: ComboLevel.One, description: 'Heal an Ally with anicent healing magic', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.TreeOfNur]} as Combo],
    [ComboName.ForestWall, {name: 'Forest Wall', level: ComboLevel.Eight, description: 'Create a wall of vegetation', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.TreeOfNur]} as Combo],
    [ComboName.SeedShooters, {name: 'Seed Shooters', level: ComboLevel.One, description: 'Shoot several hard seeds at foes', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.TreeOfNur]} as Combo],
    [ComboName.LeechVines, {name: 'Leech Vines', level: ComboLevel.Eight, description: 'Attach some vines to a creature and drain their life', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.TreeOfNur]} as Combo],
    [ComboName.SylvanHealingMass, {name: 'Sylvan Healing, Mass', level: ComboLevel.Fourteen, description: 'Heal all Allies with anicent healing magic', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.TreeOfNur]} as Combo],
    [ComboName.SplinterStones, {name: 'Splinter Stones', level: ComboLevel.Eight, description: 'A stone splinters outward hitting all targets', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.TreeOfNur]} as Combo],
    [ComboName.TreeEnt, {name: 'Tree Ent', level: ComboLevel.Fourteen, description: 'Call upon a fellow tree to fight by your side', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.TreeOfNur]} as Combo],
    [ComboName.Earthquake, {name: 'Earthquake', level: ComboLevel.Fourteen, description: 'Intensly shake the earth around you', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.TreeOfNur]} as Combo],
    [ComboName.GiftOfLife, {name: 'Gift Of Life', level: ComboLevel.Twenty, description: 'Bring an Ally back to conciousness', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.TreeOfNur]} as Combo],
    [ComboName.Quicksand, {name: 'Quicksand', level: ComboLevel.Fourteen, description: 'Create a slogging pit of quicksand', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.TreeOfNur]} as Combo],
    [ComboName.Crevasse, {name: 'Crevasse', level: ComboLevel.Fourteen, description: 'Fissure the ground, creating a giant crevasse', damage: 'Prime + 2', effect: '', subClasses: [AcolyteSubClass.TreeOfNur]} as Combo],
]);
/*
    [ComboName.ShieldThrow, {name: 'Shield', level: ComboLevel.One, description: '', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Predator]} as Combo],
    [ComboName.ShieldThrow, {name: 'Shield', level: ComboLevel.One, description: '', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Predator]} as Combo],
    [ComboName.ShieldThrow, {name: 'Shield', level: ComboLevel.One, description: '', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Predator]} as Combo],
    [ComboName.ShieldThrow, {name: 'Shield', level: ComboLevel.One, description: '', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Predator]} as Combo],
    [ComboName.ShieldThrow, {name: 'Shield', level: ComboLevel.One, description: '', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Predator]} as Combo],
    [ComboName.ShieldThrow, {name: 'Shield', level: ComboLevel.One, description: '', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Predator]} as Combo],
    [ComboName.ShieldThrow, {name: 'Shield', level: ComboLevel.One, description: '', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Predator]} as Combo],
    [ComboName.ShieldThrow, {name: 'Shield', level: ComboLevel.One, description: '', damage: 'Prime + 2', effect: '', subClasses: [HunterSubClass.Predator]} as Combo],
*/
export const SubClassCombos = () => {
    let CorsairPirateOfTheSkye: Combo[] = [];
    let CorsairOperative: Combo[] = [];
    let CorsairSongsOfTheSkye: Combo[] = [];

    let BrawlerTechnique: Combo[] = [];
    let BrawlerPresence: Combo[] = [];
    let BrawlerGladiator: Combo[] = [];

    let HunterMarksman: Combo[] = [];
    let HunterWoodsman: Combo[] = [];
    let HunterPredator: Combo[] = [];

    let AlchemistExplosives: Combo[] = [];
    let AlchemistConcoctions: Combo[] = [];
    let AlchemistTransformations: Combo[] = [];

    let RunesmithRunescribe: Combo[] = [];
    let RunesmithIndustrial: Combo[] = [];
    let RunesmithScrapMaster: Combo[] = [];

    let TearDivinerPassion: Combo[] = [];
    let TearDivinerGrace: Combo[] = [];
    let TearDivinerBrilliance: Combo[] = [];

    let AcolyteUnderrealmBog: Combo[] = [];
    let AcolyteMirrorOfTheNorth: Combo[] = [];
    let AcolyteBeastOfWod: Combo[] = [];
    let AcolyteTreeOfNur: Combo[] = [];
    const searchForSubClassArray = (subClass: string) => {
        switch (subClass) {
            case CorsairSubClass.PirateOfTheSkye:
                return CorsairPirateOfTheSkye;
            case CorsairSubClass.Operative:
                return CorsairOperative;
            case CorsairSubClass.SongsOfTheSkye:
                return CorsairSongsOfTheSkye;
            case BrawlerSubClass.Technique:
                return BrawlerTechnique;
            case BrawlerSubClass.Presence:
                return BrawlerPresence;
            case BrawlerSubClass.Gladiator:
                return BrawlerGladiator;
            case HunterSubClass.Marksman:
                return HunterMarksman;
            case HunterSubClass.Woodsman:
                return HunterWoodsman;
            case HunterSubClass.Predator:
                return HunterPredator;
            case AlchemistSubClass.Explosives:
                return AlchemistExplosives;
            case AlchemistSubClass.Concoctions:
                return AlchemistConcoctions;
            case AlchemistSubClass.Transformations:
                return AlchemistTransformations;
            case RunesmithSubClass.Runescribe:
                return RunesmithRunescribe;
            case RunesmithSubClass.Industrial:
                return RunesmithIndustrial;
            case RunesmithSubClass.ScrapMaster:
                return RunesmithScrapMaster;
            case TearDivinerSubClass.Passion:
                return TearDivinerPassion;
            case TearDivinerSubClass.Grace:
                return TearDivinerGrace;
            case TearDivinerSubClass.Brilliance:
                return TearDivinerBrilliance;
            case AcolyteSubClass.UnderrealmBog:
                return AcolyteUnderrealmBog;
            case AcolyteSubClass.MirrorOfTheNorth:
                return AcolyteMirrorOfTheNorth;
            case AcolyteSubClass.BeastOfWod:
                return AcolyteBeastOfWod;
            case AcolyteSubClass.TreeOfNur:
            default:
                return AcolyteTreeOfNur;
        }
    };
    Array.from( CombosMap ).map(([mapKey, value]) => {
        value.subClasses.forEach(subClass => {
            switch (subClass) {
                case CorsairSubClass.PirateOfTheSkye:
                    CorsairPirateOfTheSkye.push(value);
                    break;
                case CorsairSubClass.Operative:
                    CorsairOperative.push(value);
                    break;
                case CorsairSubClass.SongsOfTheSkye:
                    CorsairSongsOfTheSkye.push(value);
                    break;
                case BrawlerSubClass.Technique:
                    BrawlerTechnique.push(value);
                    break;
                case BrawlerSubClass.Presence:
                    BrawlerPresence.push(value);
                    break;
                case BrawlerSubClass.Gladiator:
                    BrawlerGladiator.push(value);
                    break;
                case HunterSubClass.Marksman:
                    HunterMarksman.push(value);
                    break;
                case HunterSubClass.Woodsman:
                    HunterWoodsman.push(value);
                    break;
                case HunterSubClass.Predator:
                    HunterPredator.push(value);
                    break;
                case AlchemistSubClass.Explosives:
                    AlchemistExplosives.push(value);
                    break;
                case AlchemistSubClass.Concoctions:
                    AlchemistConcoctions.push(value);
                    break;
                case AlchemistSubClass.Transformations:
                    AlchemistTransformations.push(value);
                    break;
                case RunesmithSubClass.Runescribe:
                    RunesmithRunescribe.push(value);
                    break;
                case RunesmithSubClass.Industrial:
                    RunesmithIndustrial.push(value);
                    break;
                case RunesmithSubClass.ScrapMaster:
                    RunesmithScrapMaster.push(value);
                    break;
                case TearDivinerSubClass.Passion:
                    TearDivinerPassion.push(value);
                    break;
                case TearDivinerSubClass.Grace:
                    TearDivinerGrace.push(value);
                    break;
                case TearDivinerSubClass.Brilliance:
                    TearDivinerBrilliance.push(value);
                    break;
                case AcolyteSubClass.UnderrealmBog:
                    AcolyteUnderrealmBog.push(value);
                    break;
                case AcolyteSubClass.MirrorOfTheNorth:
                    AcolyteMirrorOfTheNorth.push(value);
                    break;
                case AcolyteSubClass.BeastOfWod:
                    AcolyteBeastOfWod.push(value);
                    break;
                case AcolyteSubClass.TreeOfNur:
                    AcolyteTreeOfNur.push(value);
                    break;
            }
        });
    });
    return {
        searchForSubClassArray
    }
}
const levelsArray = [
    'Gain 2 Combos - Gain 6 Attribute Points - Gain 1 Skill',
    'Gain 1 Combo',
    'Gain 1 Skill',
    'Gain 1 Combo',
    'Gain 1 Skill',
    'Gain 1 Combo',
    'Gain 1 Skill',
    'Gain 1 Combo',
    'Gain 1 Skill',
    'Gain 1 Combo',
    'Gain 1 Skill',
    'Gain 1 Combo',
    'Gain 1 Skill',
    'Gain 1 Combo',
    'Gain 1 Skill',
    'Gain 1 Combo',
    'Gain 1 Skill',
    'Gain 1 Combo',
    'Gain 1 Skill',
    'Gain 1 Combo',
];
export interface iClassPage {
    title: string;
    subTitle: string;
    description: string;
    img: any;
    icon: string;
    subClasses: any;
    levels: string[];
}
export const CorsairClassPage: iClassPage = {
    title: 'Corsair',
    subTitle: 'Rogue of the Skye',
    description: `A Corsair lives and breaths in the Skye, in the ports, or in the taverns. These rogues are acrobatic, swift and have more than a few tricks up their sleeve. They also make great singers, bellowing the songs they've sang for eons amongst the crew and captains of the flying rigs.`,
    icon: '',
    subClasses: CorsairSubClass,
    img: 'noImage',
    levels: levelsArray
};
export const BrawlerClassPage: iClassPage = {
    title: 'Brawler',
    subTitle: `Battlefield Dominator`,
    description: `Brawler's strike fast and hard, opening the opponent up for even more devestating techniques. Their stature and fighting ability make them the perfect ally on the battlefield. Using their melee prowess to assist allies and manipulate the enemies against themselves.`,
    icon: '',
    subClasses: BrawlerSubClass,
    img: 'noImage',
    levels: levelsArray
};
export const HunterClassPage: iClassPage = {
    title: 'Hunter',
    subTitle: 'A Cunning Tracker',
    description: `Hunters are natural detectives and bounty hunters. They excel at finding, tracking, and capturing anything they set their sights on. They know the natural remedies of the earth and are in tune with animals and nature around them. Specialist in finding an enemy's weakness and exploiting it.`,
    icon: '',
    subClasses: HunterSubClass,
    img: 'noImage',
    levels: levelsArray
};
export const AlchemistClassPage: iClassPage = {
    title: 'Alchemist',
    subTitle: 'An Enigmatic Mind',
    description: `Alchemists create a menagerie of potions, poultices and reactions that serve them in a variety of bombastic ways. Bubbling and brewing are the sounds heard from any Alchemist's chamber. These manipulator's of the natural world know Herbalogy, Medicine and even how to make bombs.`,
    icon: '',
    subClasses: AlchemistSubClass,
    img: 'noImage',
    levels: levelsArray
};
export const RunesmithClassPage: iClassPage = {
    title: 'Runesmith',
    subTitle: 'A Brilliant Engineer',
    description: `A Runesmith inscribes special runic characters on Fragments, giving them special properties and enchanting them with special effects. They make fantastic creations and industrial machines that make them formittable fighters and brilliant repairmen in a pinch. They are able to make a tool to fix any situation and help out allies by enhancing your equipment.`,
    icon: '',
    subClasses: RunesmithSubClass,
    img: 'noImage',
    levels: levelsArray
};
export const TearDivinerClassPage: iClassPage = {
    title: 'Tear Diviner',
    subTitle: 'Magical Manipulator',
    description: ``,
    icon: '',
    subClasses: TearDivinerSubClass,
    img: 'noImage',
    levels: levelsArray
};
export const AcolyteClassPage: iClassPage = {
    title: 'Acolyte',
    subTitle: 'An Ancient Idealist',
    description: ``,
    icon: '',
    subClasses: AcolyteSubClass,
    img: 'noImage',
    levels: levelsArray
};
