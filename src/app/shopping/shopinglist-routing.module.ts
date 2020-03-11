import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

const routes: Routes = [
    {path: '', component: ShoppinglistComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}
