export const getDndUrl = (end: string) => `https://www.dnd5eapi.co${end}`;

export interface DndAPIResult {
    index: string;
    name: string;
    url: string;
}

export interface DndAPIResponse {
    count: number;
    result: DndAPIResult[];
}

export interface Monster {
    actions: Action[];
    alignment: string;
    armor_class: ArmorClass[];
    challenge_rating: number;
    charisma: number;
    condition_immunities: any[];
    constitution: number;
    damage_immunities: any[];
    damage_resistances: any[];
    damage_vulnerabilities: any[];
    dexterity: number;
    hit_dice: string;
    hit_points: number;
    hit_points_roll: string;
    image: string;
    index: string;
    intelligence: number;
    languages: string;
    legendary_actions: LegendaryAction[];
    name: string;
    proficiencies: Proficiency[];
    senses: Senses;
    size: string;
    special_abilities: SpecialAbility[];
    speed: Speed;
    strength: number;
    type: string;
    url: string;
    wisdom: number;
    xp: number;
}

export interface Action {
    attack_bonus: number | null;
    damage: Damage | null;
    desc: string;
    name: string;
    options: any[];
    type: string;
}

export interface ArmorClass {
    ac: number;
    from: string[];
    type: string;
}

export interface Damage {
    damage_dice: string;
    damage_type: {
        index: string;
        name: string;
        url: string;
    };
}

export interface LegendaryAction {
    attack_bonus: number;
    desc: string;
    name: string;
}

export interface Proficiency {
    proficiency: {
        index: string;
        name: string;
        url: string;
    };
    value: number;
}

export interface Senses {
    darkvision: string;
    passive_perception: number;
}

export interface SpecialAbility {
    attack_bonus: number | null;
    desc: string;
    name: string;
}

export interface Speed {
    walk: string;
    swim?: string;
    fly?: string;
    burrow?: string;
    climb?: string;
}
  
export interface iMagicSchool extends DndAPIResult {
    desc?: string;
}

export interface SpellProps extends React.ComponentPropsWithoutRef<"input"> {
    spellInfo?: iSpell;
    selectedSchool?: string;
    selectedLevel?: number | string;
    selectedDuration?: string;
    search?: string;
};

export interface iSpell {
    index: string;
    name: string;
    desc: string[];
    higher_level: string[];
    range: string;
    components: string[];
    material: string;
    ritual: boolean;
    duration: string;
    concentration: boolean;
    casting_time: string;
    level: number;
    school: DndAPIResult;
};

export interface iEquipment {
    desc: string[];
    special: string[];
    index: string;
    name: string;
    equipment_category: {
      index: string;
      name: string;
      url: string;
    };
    gear_category: {
      index: string;
      name: string;
      url: string;
    };
    cost: {
      quantity: number;
      unit: string;
    };
    weight: number;
    url: string;
    contents: any[]; // not sure what type contents should be
    properties: any[]; // not sure what type properties should be
}

export interface iRace {
    name: string;
    speed: number;
    ability_bonuses: {
        ability_score: DndAPIResult;
        bonus: number;
    }[];
    alignment: string;
    age: string;
    size: string;
    size_description: string;
    starting_proficiencies: {
      name: string;
    }[];
    languages: {
      name: string;
    }[];
    language_desc: string;
    traits: {
      name: string;
      desc: string;
    }[];
    subraces: {
      name: string;
      desc: string;
    }[];
};

export interface Section {
  name: string;
  index: string;
  url: string;
};

export interface RuleSection {
    name: string;
    index: string;
    desc: string;
    subsections: Section[];
    url: string;
};
  
export interface RuleSectionProps {
    ruleSection: RuleSection;
};
  