import { NgModule } from '@angular/core';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { RecipeitemComponent } from './recipeitem/recipeitem.component';
import { RecipesComponent } from './recipe/recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipedetail/recipedetail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        RecipebookComponent,
        RecipelistComponent,
        RecipeitemComponent,
        RecipeDetailComponent,
        RecipesComponent,
        RecipeStartComponent,
        RecipeEditComponent
    ],
    imports: [
        RouterModule,
        SharedModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ]
})
export class RecipesModule {

}
