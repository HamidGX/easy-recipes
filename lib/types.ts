export interface RecipesProps {
	from: number
	to: number
	count: number
	_links: RecipesLinks
	hits: Hit[]
}

export interface RecipesLinks {
	next: Next
}

export interface Next {
	href: string
	title: Title
}

export enum Title {
	NextPage = 'Next page',
	Self = 'Self',
}

export interface Hit {
	recipe: Recipe
	_links: HitLinks
}

export interface HitLinks {
	self: Next
}

export interface Recipe {
	uri: string
	label: string
	image: string
	images: Images
	source: string
	url: string
	shareAs: string
	yield: number
	dietLabels: DietLabel[]
	healthLabels: string[]
	cautions: string[]
	ingredientLines: string[]
	ingredients: Ingredient[]
	calories: number
	totalCO2Emissions: number
	co2EmissionsClass: Co2EmissionsClass
	totalWeight: number
	totalTime: number
	cuisineType: CuisineType[]
	mealType: MealType[]
	dishType: DishType[]
	totalNutrients: { [key: string]: Total }
	totalDaily: { [key: string]: Total }
	digest: Digest[]
	tags?: string[]
}

export enum Co2EmissionsClass {
	E = 'E',
	F = 'F',
	G = 'G',
}

export enum CuisineType {
	American = 'american',
	French = 'french',
	Mexican = 'mexican',
	SouthAmerican = 'south american',
}

export enum DietLabel {
	HighFiber = 'High-Fiber',
	HighProtein = 'High-Protein',
	LowCarb = 'Low-Carb',
	LowSodium = 'Low-Sodium',
}

export interface Digest {
	label: Label
	tag: string
	schemaOrgTag: SchemaOrgTag | null
	total: number
	hasRDI: boolean
	daily: number
	unit: Unit
	sub?: Digest[]
}

export enum Label {
	Calcium = 'Calcium',
	CarbohydratesNet = 'Carbohydrates (net)',
	Carbs = 'Carbs',
	CarbsNet = 'Carbs (net)',
	Cholesterol = 'Cholesterol',
	Energy = 'Energy',
	Fat = 'Fat',
	Fiber = 'Fiber',
	FolateEquivalentTotal = 'Folate equivalent (total)',
	FolateFood = 'Folate (food)',
	FolicAcid = 'Folic acid',
	Iron = 'Iron',
	Magnesium = 'Magnesium',
	Monounsaturated = 'Monounsaturated',
	NiacinB3 = 'Niacin (B3)',
	Phosphorus = 'Phosphorus',
	Polyunsaturated = 'Polyunsaturated',
	Potassium = 'Potassium',
	Protein = 'Protein',
	RiboflavinB2 = 'Riboflavin (B2)',
	Saturated = 'Saturated',
	Sodium = 'Sodium',
	SugarAlcohols = 'Sugar alcohols',
	Sugars = 'Sugars',
	SugarsAdded = 'Sugars, added',
	ThiaminB1 = 'Thiamin (B1)',
	Trans = 'Trans',
	VitaminA = 'Vitamin A',
	VitaminB12 = 'Vitamin B12',
	VitaminB6 = 'Vitamin B6',
	VitaminC = 'Vitamin C',
	VitaminD = 'Vitamin D',
	VitaminE = 'Vitamin E',
	VitaminK = 'Vitamin K',
	Water = 'Water',
	Zinc = 'Zinc',
}

export enum SchemaOrgTag {
	CarbohydrateContent = 'carbohydrateContent',
	CholesterolContent = 'cholesterolContent',
	FatContent = 'fatContent',
	FiberContent = 'fiberContent',
	ProteinContent = 'proteinContent',
	SaturatedFatContent = 'saturatedFatContent',
	SodiumContent = 'sodiumContent',
	SugarContent = 'sugarContent',
	TransFatContent = 'transFatContent',
}

export enum Unit {
	Empty = '%',
	G = 'g',
	Kcal = 'kcal',
	Mg = 'mg',
	Μg = 'µg',
}

export enum DishType {
	Desserts = 'desserts',
	MainCourse = 'main course',
	Salad = 'salad',
	Starter = 'starter',
}

export interface Images {
	THUMBNAIL: Large
	SMALL: Large
	REGULAR: Large
	LARGE?: Large
}

export interface Large {
	url: string
	width: number
	height: number
}

export interface Ingredient {
	text: string
	quantity: number
	measure: null | string
	food: string
	weight: number
	foodCategory: string
	foodId: string
	image: null | string
}

export enum MealType {
	Breakfast = 'breakfast',
	LunchDinner = 'lunch/dinner',
	Snack = 'snack',
}

export interface Total {
	label: Label
	quantity: number
	unit: Unit
}
