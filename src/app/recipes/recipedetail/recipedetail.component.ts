import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map, switchMap } from 'rxjs/operators';
import * as RecipesAction from '../store/recipe.actions';
import * as ShoppingListActions from '../../shopping/shoppinglist/store/shopping-list.actions';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.route.params
    .pipe(
      map(params => {
        return +params['id'];
      }),
      switchMap(id => {
        this.id = id;
        return this.store.select('recipes');
      }),
      map(recipesState => {
        return recipesState.recipes.find((recipe, index) => {
            return index === this.id;
            });
          })
        )
        .subscribe(recipe => {
          this.recipe = recipe;
      }
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onAddToShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }

  onDeleteRecipe() {
    this.store.dispatch(new RecipesAction.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }
}
