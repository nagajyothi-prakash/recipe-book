import { ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('inputName') inputNameRef: ElementRef;
  @ViewChild('inputAmount') inputAmountRef: ElementRef;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onIngredientAdded() {
    const newName = this.inputNameRef.nativeElement.value;
    const newAmount = this.inputAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(newName, newAmount)
    this.shoppingService.addIngredient(newIngredient);
  }
}
