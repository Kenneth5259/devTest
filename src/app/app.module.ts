import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSortModule, MatInputModule, MatDialog, MatDialogModule, MatTabsModule, MatExpansionModule, MatDividerModule, MatStepperModule, MatRadioModule, MatTreeModule, MatBottomSheet, MatBottomSheetModule, MatProgressBarModule, MatSelectModule, MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BudgetCodesListComponent } from './components/budget-codes-list/budget-codes-list.component';
import { BudgetCodeFormComponent } from './components/budget-code-form/budget-code-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetCodesListComponent,
    BudgetCodeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSortModule,
    MatDialogModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    MatStepperModule,
    MatTreeModule,
    MatBottomSheetModule,
    MatProgressBarModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatTableModule,
    MatBottomSheetModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
