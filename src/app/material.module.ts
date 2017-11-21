import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule,MatButtonModule,MatInputModule,MatCardModule,MatMenuModule ,
    MatSidenavModule, MatIconModule

        } from '@angular/material';

@NgModule({
    imports:[MatToolbarModule,MatButtonModule,MatInputModule,MatCardModule,MatMenuModule,MatSidenavModule,
        MatIconModule],
    exports:[MatToolbarModule,MatButtonModule,MatInputModule,MatCardModule,MatMenuModule,MatSidenavModule,
        MatIconModule]
})

export class MaterialModule { }
