using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HindiBackApp.Migrations
{
    public partial class SecondCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Candidats",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nom = table.Column<string>(nullable: true),
                    Prenom = table.Column<string>(nullable: true),
                    DateDeNaissanse = table.Column<DateTime>(nullable: false),
                    Email = table.Column<string>(nullable: true),
                    Ville = table.Column<string>(nullable: true),
                    Telephone = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Candidats", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Candidatures",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CandidatId = table.Column<int>(nullable: false),
                    Offre = table.Column<string>(nullable: true),
                    DateCandidature = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Candidatures", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Candidatures_Candidats_CandidatId",
                        column: x => x.CandidatId,
                        principalTable: "Candidats",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            

            migrationBuilder.CreateIndex(
                name: "IX_Candidatures_CandidatId",
                table: "Candidatures",
                column: "CandidatId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.DropTable(
                name: "Candidatures");

            migrationBuilder.DropTable(
                name: "Candidats");
        }
    }
}
